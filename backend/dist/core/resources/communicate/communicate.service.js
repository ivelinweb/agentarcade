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
exports.CommunicateService = void 0;
const common_1 = require("@nestjs/common");
const coinbase_agent_service_1 = require("../../../lib/coinbase-agent/coinbase-agent.service");
const create_agent_repository_1 = require("../create-agent/create-agent.repository");
const create_eliza_agent_repository_1 = require("../create-agent/create-eliza-agent.repository");
const create_agent_dto_1 = require("../create-agent/dto/create-agent-dto");
const openai_service_1 = require("../../../lib/openai/openai.service");
let CommunicateService = class CommunicateService {
    constructor(agentKitService, createAgentRepository, createElizaAgentRepository, openAIService) {
        this.agentKitService = agentKitService;
        this.createAgentRepository = createAgentRepository;
        this.createElizaAgentRepository = createElizaAgentRepository;
        this.openAIService = openAIService;
    }
    async comunicate(agentName, communicateDto) {
        const agent = await this.createAgentRepository.findByName(agentName);
        if (!agent) {
            const elizaAgent = await this.createElizaAgentRepository.findByName(agentName);
            if (elizaAgent) {
                const userMessage = communicateDto.message || communicateDto.userInput || '';
                const response = await this.openAIService.generateResponse(agentName, elizaAgent.bio, userMessage);
                return {
                    message: response
                };
            }
            return { message: `Agent with name ${agentName} not found` };
        }
        if (!agent.sdk) {
            const userMessage = communicateDto.message || communicateDto.userInput || '';
            const response = await this.openAIService.generateResponse(agentName, ['A DeFi assistant specialized in Rootstock Testnet blockchain'], userMessage);
            return {
                message: response
            };
        }
        const userMessage = communicateDto.message || communicateDto.userInput || '';
        switch (agent.sdk) {
            case create_agent_dto_1.SDK.AGENT_KIT:
                let res = await this.agentKitService.runCoinbaseAgent(userMessage);
                return res;
            default:
                return { message: `Agent ${agentName} has an unknown SDK type: ${agent.sdk}` };
        }
    }
};
exports.CommunicateService = CommunicateService;
exports.CommunicateService = CommunicateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [coinbase_agent_service_1.CoinbaseAgentService,
        create_agent_repository_1.CreateAgentRepository,
        create_eliza_agent_repository_1.CreateElizaAgentRepository,
        openai_service_1.OpenAIService])
], CommunicateService);
//# sourceMappingURL=communicate.service.js.map