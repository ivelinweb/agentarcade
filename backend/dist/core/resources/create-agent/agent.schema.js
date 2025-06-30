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
exports.ElizaAgentSchema = exports.AgentSchema = exports.ElizaAgent = exports.Agent = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const create_agent_dto_1 = require("./dto/create-agent-dto");
let Agent = class Agent {
};
exports.Agent = Agent;
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Agent.prototype, "agentName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Agent.prototype, "agentDescription", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: create_agent_dto_1.SDK,
        required: true,
    }),
    __metadata("design:type", String)
], Agent.prototype, "sdk", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Agent.prototype, "chain", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: (Array),
        required: false,
    }),
    __metadata("design:type", Array)
], Agent.prototype, "task", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: create_agent_dto_1.TYPE,
        required: true,
    }),
    __metadata("design:type", String)
], Agent.prototype, "agentType", void 0);
exports.Agent = Agent = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], Agent);
let ElizaAgent = class ElizaAgent {
};
exports.ElizaAgent = ElizaAgent;
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], ElizaAgent.prototype, "agentName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: (Array),
        required: true,
    }),
    __metadata("design:type", Array)
], ElizaAgent.prototype, "bio", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], ElizaAgent.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: (Array),
        required: true,
    }),
    __metadata("design:type", Array)
], ElizaAgent.prototype, "knowledge", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], ElizaAgent.prototype, "imageName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], ElizaAgent.prototype, "containerName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
    }),
    __metadata("design:type", Number)
], ElizaAgent.prototype, "port", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        default: 'rootstock',
    }),
    __metadata("design:type", String)
], ElizaAgent.prototype, "chain", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], ElizaAgent.prototype, "contractAddress", void 0);
exports.ElizaAgent = ElizaAgent = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], ElizaAgent);
exports.AgentSchema = mongoose_1.SchemaFactory.createForClass(Agent);
exports.ElizaAgentSchema = mongoose_1.SchemaFactory.createForClass(ElizaAgent);
//# sourceMappingURL=agent.schema.js.map