"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAgentModule = void 0;
const common_1 = require("@nestjs/common");
const create_agent_service_1 = require("./create-agent.service");
const create_agent_controller_1 = require("./create-agent.controller");
const coinbase_agent_module_1 = require("../../../lib/coinbase-agent/coinbase-agent.module");
const mongoose_1 = require("@nestjs/mongoose");
const agent_schema_1 = require("./agent.schema");
const create_agent_repository_1 = require("./create-agent.repository");
const create_eliza_agent_repository_1 = require("./create-eliza-agent.repository");
const skipMongoDB = process.env.SKIP_MONGODB === 'true';
let CreateAgentModule = class CreateAgentModule {
};
exports.CreateAgentModule = CreateAgentModule;
exports.CreateAgentModule = CreateAgentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            ...(skipMongoDB
                ? []
                : [
                    mongoose_1.MongooseModule.forFeature([{ name: agent_schema_1.Agent.name, schema: agent_schema_1.AgentSchema }]),
                    mongoose_1.MongooseModule.forFeature([
                        { name: agent_schema_1.ElizaAgent.name, schema: agent_schema_1.ElizaAgentSchema },
                    ]),
                ]),
            coinbase_agent_module_1.CoinbaseAgentModule.register(),
        ],
        controllers: [create_agent_controller_1.CreateAgentController],
        providers: [
            create_agent_service_1.CreateAgentService,
            create_agent_repository_1.CreateAgentRepository,
            create_eliza_agent_repository_1.CreateElizaAgentRepository,
        ],
        exports: [
            create_agent_service_1.CreateAgentService,
            create_agent_repository_1.CreateAgentRepository,
            create_eliza_agent_repository_1.CreateElizaAgentRepository,
        ],
    })
], CreateAgentModule);
//# sourceMappingURL=create-agent.module.js.map