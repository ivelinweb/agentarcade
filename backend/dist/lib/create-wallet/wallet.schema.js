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
exports.walletSchema = exports.Wallet = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Wallet = class Wallet {
};
exports.Wallet = Wallet;
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Wallet.prototype, "userAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Wallet.prototype, "walletAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Wallet.prototype, "walletPrivateKey", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: false,
    }),
    __metadata("design:type", String)
], Wallet.prototype, "contractAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: false,
        default: 'rootstock',
    }),
    __metadata("design:type", String)
], Wallet.prototype, "network", void 0);
exports.Wallet = Wallet = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], Wallet);
exports.walletSchema = mongoose_1.SchemaFactory.createForClass(Wallet);
//# sourceMappingURL=wallet.schema.js.map