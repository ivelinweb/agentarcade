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
exports.CreateAgentRepository = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const agent_schema_1 = require("./agent.schema");
const mongoose_2 = require("mongoose");
const common_1 = require("@nestjs/common");
const inMemoryAgents = [];
function logAgents() {
    console.log('In-memory agents:', JSON.stringify(inMemoryAgents, null, 2));
}
let CreateAgentRepository = class CreateAgentRepository {
    constructor(agentModel) {
        this.skipMongoDB = process.env.SKIP_MONGODB === 'true';
        this.agentModel = agentModel;
    }
    async create(agent) {
        if (this.skipMongoDB) {
            const newAgent = { ...agent, _id: Date.now().toString() };
            inMemoryAgents.push(newAgent);
            console.log('Created agent:', JSON.stringify(newAgent, null, 2));
            logAgents();
            return newAgent;
        }
        const newAgent = new this.agentModel(agent);
        return newAgent.save();
    }
    async findByName(agentName) {
        if (this.skipMongoDB) {
            console.log(`Finding agent by name: ${agentName}`);
            logAgents();
            const agent = inMemoryAgents.find(agent => agent.agentName === agentName) || null;
            console.log('Found agent:', agent ? JSON.stringify(agent, null, 2) : 'null');
            return agent;
        }
        const agent = await this.agentModel.findOne({ agentName });
        return agent;
    }
};
exports.CreateAgentRepository = CreateAgentRepository;
exports.CreateAgentRepository = CreateAgentRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Optional)()),
    __param(0, (0, mongoose_1.InjectModel)(agent_schema_1.Agent.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CreateAgentRepository);
//# sourceMappingURL=create-agent.repository.js.map