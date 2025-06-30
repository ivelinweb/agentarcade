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
exports.CreateAgentController = void 0;
const common_1 = require("@nestjs/common");
const create_agent_service_1 = require("./create-agent.service");
const create_agent_dto_1 = require("./dto/create-agent-dto");
let CreateAgentController = class CreateAgentController {
    constructor(createAgentService) {
        this.createAgentService = createAgentService;
    }
    async create(createAgentDto) {
        await this.createAgentService.create(createAgentDto);
    }
    async createRootstockAgent(createElizaAgentDto) {
        const data = await this.createAgentService.createRootstockAgent(createElizaAgentDto);
        return data;
    }
    async createFlowAgent(createElizaAgentDto) {
        return this.createRootstockAgent(createElizaAgentDto);
    }
    async createOpenCampusCodexAgent(createElizaAgentDto) {
        return this.createRootstockAgent(createElizaAgentDto);
    }
    async getAllAgents() {
        return this.createAgentService.getAllAgents();
    }
    async getAgentStats() {
        return this.createAgentService.getAgentStats();
    }
    async deleteAgent(agentName) {
        return this.createAgentService.deleteAgent(agentName);
    }
};
exports.CreateAgentController = CreateAgentController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_agent_dto_1.CreateAgentDto]),
    __metadata("design:returntype", Promise)
], CreateAgentController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('rootstock'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_agent_dto_1.CreateElizaAgentDto]),
    __metadata("design:returntype", Promise)
], CreateAgentController.prototype, "createRootstockAgent", null);
__decorate([
    (0, common_1.Post)('flow'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_agent_dto_1.CreateElizaAgentDto]),
    __metadata("design:returntype", Promise)
], CreateAgentController.prototype, "createFlowAgent", null);
__decorate([
    (0, common_1.Post)('opencampuscodex'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_agent_dto_1.CreateElizaAgentDto]),
    __metadata("design:returntype", Promise)
], CreateAgentController.prototype, "createOpenCampusCodexAgent", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CreateAgentController.prototype, "getAllAgents", null);
__decorate([
    (0, common_1.Get)('stats'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CreateAgentController.prototype, "getAgentStats", null);
__decorate([
    (0, common_1.Get)('delete/:agentName'),
    __param(0, (0, common_1.Param)('agentName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CreateAgentController.prototype, "deleteAgent", null);
exports.CreateAgentController = CreateAgentController = __decorate([
    (0, common_1.Controller)('create-agent'),
    __metadata("design:paramtypes", [create_agent_service_1.CreateAgentService])
], CreateAgentController);
//# sourceMappingURL=create-agent.controller.js.map