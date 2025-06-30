"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CovalentAgentModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CovalentAgentModule = void 0;
const common_1 = require("@nestjs/common");
const covalent_agent_service_1 = require("./covalent-agent.service");
const create_agent_module_1 = require("../../core/resources/create-agent/create-agent.module");
let CovalentAgentModule = CovalentAgentModule_1 = class CovalentAgentModule {
    static register() {
        return {
            imports: [create_agent_module_1.CreateAgentModule],
            module: CovalentAgentModule_1,
            providers: [covalent_agent_service_1.CovalentAgentService],
            exports: [covalent_agent_service_1.CovalentAgentService],
        };
    }
};
exports.CovalentAgentModule = CovalentAgentModule;
exports.CovalentAgentModule = CovalentAgentModule = CovalentAgentModule_1 = __decorate([
    (0, common_1.Module)({})
], CovalentAgentModule);
//# sourceMappingURL=covalent-agent.module.js.map