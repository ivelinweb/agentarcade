"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CreateWalletModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWalletModule = void 0;
const common_1 = require("@nestjs/common");
const create_wallet_service_1 = require("./create-wallet.service");
let CreateWalletModule = CreateWalletModule_1 = class CreateWalletModule {
    static register() {
        return {
            module: CreateWalletModule_1,
            providers: [create_wallet_service_1.CreateWalletService],
            exports: [create_wallet_service_1.CreateWalletService],
        };
    }
};
exports.CreateWalletModule = CreateWalletModule;
exports.CreateWalletModule = CreateWalletModule = CreateWalletModule_1 = __decorate([
    (0, common_1.Module)({})
], CreateWalletModule);
//# sourceMappingURL=create-wallet.module.js.map