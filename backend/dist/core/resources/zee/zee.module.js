"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZeeModule = void 0;
const common_1 = require("@nestjs/common");
const zee_service_1 = require("./zee.service");
const zee_controller_1 = require("./zee.controller");
const mongoose_1 = require("@nestjs/mongoose");
const zee_schema_1 = require("./zee.schema");
const zee_repository_1 = require("./zee.repository");
const skipMongoDB = process.env.SKIP_MONGODB === 'true';
let ZeeModule = class ZeeModule {
};
exports.ZeeModule = ZeeModule;
exports.ZeeModule = ZeeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            ...(skipMongoDB
                ? []
                : [mongoose_1.MongooseModule.forFeature([{ name: zee_schema_1.Zee.name, schema: zee_schema_1.ZeeSchema }])]),
        ],
        controllers: [zee_controller_1.ZeeController],
        providers: [zee_service_1.ZeeService, zee_repository_1.ZeeRepository],
    })
], ZeeModule);
//# sourceMappingURL=zee.module.js.map