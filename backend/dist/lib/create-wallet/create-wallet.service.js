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
exports.CreateWalletService = void 0;
const common_1 = require("@nestjs/common");
const ethers_1 = require("ethers");
const create_wallet_repository_1 = require("./create-wallet.repository");
let CreateWalletService = class CreateWalletService {
    constructor(createWalletRepository) {
        this.createWalletRepository = createWalletRepository;
    }
    async createWallet(userAddress) {
        const address = ethers_1.ethers.getAddress(userAddress);
        const wallet = ethers_1.ethers.Wallet.createRandom();
        await this.createWalletRepository.create({
            userAddress: address,
            walletAddress: wallet.address,
            walletPrivateKey: wallet.privateKey,
        });
    }
};
exports.CreateWalletService = CreateWalletService;
exports.CreateWalletService = CreateWalletService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [create_wallet_repository_1.CreateWalletRepository])
], CreateWalletService);
//# sourceMappingURL=create-wallet.service.js.map