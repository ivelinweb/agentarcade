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
exports.CoinbaseAgentService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const agentkit_1 = require("@coinbase/agentkit");
const agentkit_langchain_1 = require("@coinbase/agentkit-langchain");
const messages_1 = require("@langchain/core/messages");
const langgraph_1 = require("@langchain/langgraph");
const prebuilt_1 = require("@langchain/langgraph/prebuilt");
const openai_1 = require("@langchain/openai");
const accounts_1 = require("viem/accounts");
const viem_1 = require("viem");
let CoinbaseAgentService = class CoinbaseAgentService {
    constructor(configService) {
        this.configService = configService;
        this.rootstockTestnet = {
            id: 31,
            name: 'Rootstock Testnet',
            nativeCurrency: {
                name: 'tRBTC',
                symbol: 'tRBTC',
                decimals: 18,
            },
            rpcUrls: {
                default: {
                    http: ['https://public-node.testnet.rsk.co'],
                },
                public: {
                    http: ['https://public-node.testnet.rsk.co'],
                },
            },
            blockExplorers: {
                default: {
                    name: 'Rootstock Explorer',
                    url: 'https://explorer.testnet.rootstock.io',
                },
            },
        };
    }
    async initializeAgent() {
        try {
            const llm = new openai_1.ChatOpenAI({
                model: 'gpt-4o-mini',
            });
            const account = (0, accounts_1.privateKeyToAccount)(this.configService.get('PRIVATE_KEY'));
            const client = (0, viem_1.createWalletClient)({
                account,
                chain: this.rootstockTestnet,
                transport: (0, viem_1.http)(),
            });
            const walletProvider = new agentkit_1.ViemWalletProvider(client);
            const agentkit = await agentkit_1.AgentKit.from({
                walletProvider,
                actionProviders: [
                    (0, agentkit_1.wethActionProvider)(),
                    (0, agentkit_1.pythActionProvider)(),
                    (0, agentkit_1.walletActionProvider)(),
                    (0, agentkit_1.erc20ActionProvider)(),
                ],
            });
            const tools = await (0, agentkit_langchain_1.getLangChainTools)(agentkit);
            const memory = new langgraph_1.MemorySaver();
            const agentConfig = {
                configurable: { thread_id: 'CDP AgentKit Chatbot Example!' },
            };
            const agent = (0, prebuilt_1.createReactAgent)({
                llm,
                tools,
                checkpointSaver: memory,
                messageModifier: `
        You are a helpful agent that can interact onchain using the Coinbase Developer Platform AgentKit. You are
        empowered to interact onchain using your tools. If you ever need funds, you can request them from the
        faucet if you are on network ID 'Rootstock Testnet'. If not, you can provide your wallet details and request
        funds from the user. Before executing your first action, get the wallet details to see what network
        you're on. If there is a 5XX (internal) HTTP error code, ask the user to try again later. If someone
        asks you to do something you can't do with your currently available tools, you must say so, and
        encourage them to implement it themselves using the CDP SDK + Agentkit, recommend they go to
        docs.cdp.coinbase.com for more information. Be concise and helpful with your responses. Refrain from
        restating your tools' descriptions unless it is explicitly requested.
        `,
            });
            return { agent, config: agentConfig };
        }
        catch (error) {
            console.error('Failed to initialize agent:', error);
            throw error;
        }
    }
    async runChatMode(agent, config, userInput) {
        console.log('Processing prompt in agent kit ....');
        try {
            const stream = await agent.stream({ messages: [new messages_1.HumanMessage(userInput)] }, config);
            for await (const chunk of stream) {
                if ('agent' in chunk) {
                    console.log(chunk.agent.messages[0].content);
                    return chunk.agent.messages[0].content;
                }
                else if ('tools' in chunk) {
                    console.log(chunk.tools.messages[0].content);
                    return chunk.tools.messages[0].content;
                }
                console.log('-------------------');
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.error('Error:', error.message);
            }
            process.exit(1);
        }
    }
    async runCoinbaseAgent(userInput) {
        try {
            const { agent, config } = await this.initializeAgent();
            const res = await this.runChatMode(agent, config, userInput);
            return res;
        }
        catch (error) {
            if (error instanceof Error) {
                console.error('Error:', error.message);
            }
            process.exit(1);
        }
    }
};
exports.CoinbaseAgentService = CoinbaseAgentService;
exports.CoinbaseAgentService = CoinbaseAgentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], CoinbaseAgentService);
//# sourceMappingURL=coinbase-agent.service.js.map