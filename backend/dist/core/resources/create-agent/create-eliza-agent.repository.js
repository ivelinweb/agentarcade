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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateElizaAgentRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const agent_schema_1 = require("./agent.schema");
const mongoose_2 = require("mongoose");
const inMemoryElizaAgents = [];
function logElizaAgents() {
    console.log('In-memory eliza agents:', JSON.stringify(inMemoryElizaAgents, null, 2));
}
let CreateElizaAgentRepository = class CreateElizaAgentRepository {
    constructor(elizaAgentModel) {
        this.skipMongoDB = process.env.SKIP_MONGODB === 'true';
        this.elizaAgentModel = elizaAgentModel;
    }
    async create(createElizaAgentDto) {
        if (this.skipMongoDB) {
            const newElizaAgent = {
                ...createElizaAgentDto,
                _id: Date.now().toString(),
                createdAt: new Date(),
            };
            inMemoryElizaAgents.push(newElizaAgent);
            console.log('Created eliza agent:', JSON.stringify(newElizaAgent, null, 2));
            logElizaAgents();
            return newElizaAgent;
        }
        const newElizaAgent = new this.elizaAgentModel(createElizaAgentDto);
        return newElizaAgent.save();
    }
    async findByName(agentName) {
        if (this.skipMongoDB) {
            console.log(`Finding eliza agent by name: ${agentName}`);
            logElizaAgents();
            const agent = inMemoryElizaAgents.find(agent => agent['agentName'] === agentName) || null;
            console.log('Found eliza agent:', agent ? JSON.stringify(agent, null, 2) : 'null');
            return agent;
        }
        const agent = await this.elizaAgentModel.findOne({ agentName });
        return agent;
    }
    async findLast() {
        if (this.skipMongoDB) {
            if (inMemoryElizaAgents.length === 0)
                return null;
            return [...inMemoryElizaAgents]
                .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())[0];
        }
        const agent = await this.elizaAgentModel.findOne().sort({ createdAt: -1 });
        return agent;
    }
    async findAll() {
        if (this.skipMongoDB) {
            return inMemoryElizaAgents;
        }
        const agents = await this.elizaAgentModel.find().sort({ createdAt: -1 });
        return agents;
    }
    async deleteByName(agentName) {
        if (this.skipMongoDB) {
            const index = inMemoryElizaAgents.findIndex(agent => agent.agentName === agentName);
            if (index !== -1) {
                inMemoryElizaAgents.splice(index, 1);
                return true;
            }
            return false;
        }
        const result = await this.elizaAgentModel.deleteOne({ agentName });
        return result.deletedCount > 0;
    }
};
exports.CreateElizaAgentRepository = CreateElizaAgentRepository;
exports.CreateElizaAgentRepository = CreateElizaAgentRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Optional)()),
    __param(0, (0, mongoose_1.InjectModel)(agent_schema_1.ElizaAgent.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CreateElizaAgentRepository);
//# sourceMappingURL=create-eliza-agent.repository.js.map