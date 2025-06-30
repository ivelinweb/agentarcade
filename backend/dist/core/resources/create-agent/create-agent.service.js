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
exports.CreateAgentService = void 0;
const common_1 = require("@nestjs/common");
const path = require("path");
const create_agent_repository_1 = require("./create-agent.repository");
const fs = require("fs");
const create_eliza_agent_repository_1 = require("./create-eliza-agent.repository");
let CreateAgentService = class CreateAgentService {
    constructor(createAgentRepository, createElizaAgentRepository) {
        this.createAgentRepository = createAgentRepository;
        this.createElizaAgentRepository = createElizaAgentRepository;
    }
    async create(createAgentDto) {
        const newAgent = await this.createAgentRepository.create({
            ...createAgentDto,
        });
        return newAgent;
    }
    async getAllAgents() {
        try {
            const agents = await this.createElizaAgentRepository.findAll();
            return {
                status: common_1.HttpStatus.OK,
                agents: agents.map(agent => ({
                    id: agent._id,
                    agentName: agent.agentName,
                    bio: agent.bio,
                    type: agent.type,
                    knowledge: agent.knowledge,
                    chain: agent.chain,
                    contractAddress: agent.contractAddress,
                    imageName: agent.imageName,
                    port: agent.port,
                    createdAt: agent.createdAt
                }))
            };
        }
        catch (error) {
            console.error('Error fetching agents:', error);
            return {
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: error.message
            };
        }
    }
    async getAgentStats() {
        try {
            const agents = await this.createElizaAgentRepository.findAll();
            console.log('Found agents:', agents.map(a => ({ name: a.agentName, type: a.type })));
            const totalAgents = agents.length;
            const gameAgents = agents.filter(agent => agent.type?.toLowerCase() === 'game').length;
            const defiAgents = agents.filter(agent => agent.type?.toLowerCase() === 'defi').length;
            const socialAgents = agents.filter(agent => agent.type?.toLowerCase() === 'social').length;
            const characterChange = '+12%';
            const gameChange = '+6%';
            const defiChange = '+6%';
            const socialChange = '+6%';
            return {
                status: common_1.HttpStatus.OK,
                stats: {
                    totalCharacters: {
                        value: totalAgents,
                        change: characterChange
                    },
                    totalGames: {
                        value: gameAgents,
                        change: gameChange
                    },
                    totalDefi: {
                        value: defiAgents,
                        change: defiChange
                    },
                    totalSocial: {
                        value: socialAgents,
                        change: socialChange
                    }
                }
            };
        }
        catch (error) {
            console.error('Error fetching agent stats:', error);
            return {
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: error.message
            };
        }
    }
    async deleteAgent(agentName) {
        try {
            const deleted = await this.createElizaAgentRepository.deleteByName(agentName);
            if (deleted) {
                return {
                    status: common_1.HttpStatus.OK,
                    message: `Agent "${agentName}" successfully deleted`
                };
            }
            else {
                return {
                    status: common_1.HttpStatus.NOT_FOUND,
                    message: `Agent "${agentName}" not found`
                };
            }
        }
        catch (error) {
            console.error('Error deleting agent:', error);
            return {
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: error.message
            };
        }
    }
    async createRootstockAgent(createElizaAgentDto) {
        try {
            console.log('Received data:', JSON.stringify(createElizaAgentDto, null, 2));
            if (!createElizaAgentDto.agentName) {
                return {
                    status: common_1.HttpStatus.BAD_REQUEST,
                    error: 'Agent name is required'
                };
            }
            if (!createElizaAgentDto.bio || !Array.isArray(createElizaAgentDto.bio) || createElizaAgentDto.bio.length === 0) {
                return {
                    status: common_1.HttpStatus.BAD_REQUEST,
                    error: 'Bio is required and must be an array of strings'
                };
            }
            if (!createElizaAgentDto.type) {
                return {
                    status: common_1.HttpStatus.BAD_REQUEST,
                    error: 'Type is required'
                };
            }
            if (!createElizaAgentDto.knowledge || !Array.isArray(createElizaAgentDto.knowledge)) {
                return {
                    status: common_1.HttpStatus.BAD_REQUEST,
                    error: 'Knowledge is required and must be an array of strings'
                };
            }
            let readFile;
            console.log('dirname', __dirname);
            if (createElizaAgentDto.type === 'game') {
                readFile = fs.readFileSync(path.join(process.cwd(), '/src/core/resources/create-agent/characters/game.json'), 'utf-8');
            }
            else if (createElizaAgentDto.type === 'social') {
                readFile = fs.readFileSync(path.join(process.cwd(), '/src/core/resources/create-agent/characters/social-character.json'), 'utf-8');
            }
            else if (createElizaAgentDto.type === 'ai-companion') {
                readFile = fs.readFileSync(path.join(process.cwd(), '/src/core/resources/create-agent/characters/ai-companion.json'), 'utf-8');
            }
            else {
                readFile = fs.readFileSync(path.join(process.cwd(), '/src/core/resources/create-agent/characters/defi-character.json'), 'utf-8');
            }
            const jsonObject = JSON.parse(readFile);
            jsonObject.name = createElizaAgentDto.agentName;
            jsonObject.bio = createElizaAgentDto.bio;
            if (createElizaAgentDto.contractAddress) {
                jsonObject.contractAddress = createElizaAgentDto.contractAddress;
            }
            if (createElizaAgentDto.chain) {
                jsonObject.chain = createElizaAgentDto.chain;
            }
            else {
                jsonObject.chain = 'rootstock';
            }
            const elizaRootstockPath = path.join(process.cwd(), '../elizaRootstock');
            const charactersPath = path.join(elizaRootstockPath, 'characters');
            try {
                if (!fs.existsSync(elizaRootstockPath)) {
                    fs.mkdirSync(elizaRootstockPath, { recursive: true });
                }
                if (!fs.existsSync(charactersPath)) {
                    fs.mkdirSync(charactersPath, { recursive: true });
                }
                const filePath = path.join(charactersPath, `${createElizaAgentDto.agentName}.json`);
                fs.writeFileSync(filePath, JSON.stringify(jsonObject, null, 2));
                console.log(`Character file created at ${filePath}`);
            }
            catch (err) {
                console.log('Error creating character file:', err);
            }
            const lastAgent = await this.createElizaAgentRepository.findLast();
            const port = lastAgent?.port ? lastAgent.port + 1 : 3000;
            console.log('Skipping Docker operations for testing purposes...');
            await this.createElizaAgentRepository.create({
                ...createElizaAgentDto,
                imageName: `agentic-${createElizaAgentDto.agentName}`,
                containerName: 'test-container-id',
                port: port,
            });
            console.log('Added new agent in DB...');
            return { status: common_1.HttpStatus.OK };
        }
        catch (error) {
            console.log(error);
            return { status: common_1.HttpStatus.INTERNAL_SERVER_ERROR, error: error.message };
        }
    }
};
exports.CreateAgentService = CreateAgentService;
exports.CreateAgentService = CreateAgentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [create_agent_repository_1.CreateAgentRepository,
        create_eliza_agent_repository_1.CreateElizaAgentRepository])
], CreateAgentService);
//# sourceMappingURL=create-agent.service.js.map