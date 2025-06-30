"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CovalentAgentService = void 0;
const ai_agent_sdk_1 = require("@covalenthq/ai-agent-sdk");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const create_agent_repository_1 = require("../../core/resources/create-agent/create-agent.repository");
const user = (content) => ({
    role: 'user',
    content,
});
let CovalentAgentService = class CovalentAgentService {
    constructor(createAgentRepository, configService) {
        this.createAgentRepository = createAgentRepository;
        this.configService = configService;
    }
    async initializeAgent(agentName) {
        const agentInfo = await this.createAgentRepository.findByName(agentName);
        if (!agentInfo) {
            throw new common_1.NotFoundException('Agent not found');
        }
        let tools = {};
        const apiKey = this.configService.get('COVALENT_API_KEY');
        if (agentInfo.task.includes('token_balance')) {
            tools.tokenBalances = new ai_agent_sdk_1.TokenBalancesTool(apiKey);
        }
        if (agentInfo.task.includes('nft_balance')) {
            tools.nftBalances = new ai_agent_sdk_1.TokenBalancesTool(apiKey);
        }
        if (agentInfo.task.includes('transactions')) {
            tools.transactions = new ai_agent_sdk_1.TokenBalancesTool(apiKey);
        }
        if (agentInfo.task.includes('historical_token_price')) {
            tools.historicalTokenPrice = new ai_agent_sdk_1.HistoricalTokenPriceTool(apiKey);
        }
        const agent = new ai_agent_sdk_1.Agent({
            name: agentInfo.agentName,
            model: {
                provider: 'OPEN_AI',
                name: 'gpt-4o-mini',
            },
            description: agentInfo.agentDescription,
            tools,
        });
        return { agent, tools };
    }
    async runCovalentAgent(agentName, userInput) {
        const { agent, tools } = await this.initializeAgent(agentName);
        const state = this.createStateFn().root(agent.description);
        state.messages.push(user(userInput));
        const firstResult = await agent.run(state);
        const toolCall = firstResult.messages[firstResult.messages.length - 1];
        const toolResponse = await this.runToolCalls(tools, toolCall?.tool_calls ?? []);
        const updatedState = {
            ...firstResult,
            status: 'running',
            messages: [...firstResult.messages, ...toolResponse],
        };
        const secondResult = await agent.run(updatedState);
        console.log('run is: ', firstResult);
        const secondToolCall = secondResult.messages[secondResult.messages.length - 1];
        const transactionResponses = await this.runToolCalls(tools, secondToolCall?.tool_calls ?? []);
        const finalState = {
            ...secondResult,
            messages: [...secondResult.messages, ...transactionResponses],
        };
        const finalResult = await agent.run(finalState);
        console.log('ff result', finalResult);
        return finalResult;
    }
    async runToolCalls(tools, toolCalls) {
        const results = await Promise.all(toolCalls.map(async (tc) => {
            if (tc.type !== 'function') {
                throw new Error('Tool call needs to be a function');
            }
            const tool = tools[tc.function.name];
            if (!tool) {
                throw new Error(`Tool ${tc.function.name} not found`);
            }
            const response = await tool.execute(JSON.parse(tc.function.arguments));
            return {
                role: 'tool',
                tool_call_id: tc.id,
                content: response,
            };
        }));
        return results;
    }
    createStateFn() {
        const StateFn = {
            childState: (options) => {
                const { agent, messages, status = 'idle', children = [] } = options;
                return {
                    agent,
                    messages,
                    status,
                    children,
                };
            },
            root: (workflowDescription) => {
                return StateFn.childState({
                    agent: 'router',
                    messages: [
                        user(`Here is a description of my workflow: ${workflowDescription}`),
                    ],
                });
            },
        };
        return StateFn;
    }
};
exports.CovalentAgentService = CovalentAgentService;
exports.CovalentAgentService = CovalentAgentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [create_agent_repository_1.CreateAgentRepository,
        config_1.ConfigService])
], CovalentAgentService);
//# sourceMappingURL=covalent-agent.service.js.map