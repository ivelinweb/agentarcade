"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicateModule = void 0;
const common_1 = require("@nestjs/common");
const communicate_service_1 = require("./communicate.service");
const communicate_controller_1 = require("./communicate.controller");
const coinbase_agent_module_1 = require("../../../lib/coinbase-agent/coinbase-agent.module");
const create_agent_module_1 = require("../create-agent/create-agent.module");
const openai_module_1 = require("../../../lib/openai/openai.module");
let CommunicateModule = class CommunicateModule {
};
exports.CommunicateModule = CommunicateModule;
exports.CommunicateModule = CommunicateModule = __decorate([
    (0, common_1.Module)({
        imports: [
            coinbase_agent_module_1.CoinbaseAgentModule.register(),
            create_agent_module_1.CreateAgentModule,
            openai_module_1.OpenAIModule,
        ],
        controllers: [communicate_controller_1.CommunicateController],
        providers: [communicate_service_1.CommunicateService],
    })
], CommunicateModule);
//# sourceMappingURL=communicate.module.js.map