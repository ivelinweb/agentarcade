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
exports.CommunicateController = void 0;
const common_1 = require("@nestjs/common");
const communicate_service_1 = require("./communicate.service");
const communicate_dto_1 = require("./dto/communicate.dto");
let CommunicateController = class CommunicateController {
    constructor(communicateService) {
        this.communicateService = communicateService;
    }
    async communicate(agentName, communicateDto) {
        const response = await this.communicateService.comunicate(agentName, communicateDto);
        return {
            response,
        };
    }
};
exports.CommunicateController = CommunicateController;
__decorate([
    (0, common_1.Post)('/:agentName'),
    __param(0, (0, common_1.Param)('agentName')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, communicate_dto_1.CommunicateDto]),
    __metadata("design:returntype", Promise)
], CommunicateController.prototype, "communicate", null);
exports.CommunicateController = CommunicateController = __decorate([
    (0, common_1.Controller)('communicate'),
    __metadata("design:paramtypes", [communicate_service_1.CommunicateService])
], CommunicateController);
//# sourceMappingURL=communicate.controller.js.map