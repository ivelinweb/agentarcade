"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const communicate_module_1 = require("./core/resources/communicate/communicate.module");
const create_agent_module_1 = require("./core/resources/create-agent/create-agent.module");
const mongoose_1 = require("@nestjs/mongoose");
const zee_module_1 = require("./core/resources/zee/zee.module");
const openai_module_1 = require("./lib/openai/openai.module");
const skipMongoDB = process.env.SKIP_MONGODB === 'true';
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ['.env'],
            }),
            ...(skipMongoDB
                ? []
                : [
                    mongoose_1.MongooseModule.forRootAsync({
                        imports: [config_1.ConfigModule],
                        inject: [config_1.ConfigService],
                        useFactory: (configService) => ({
                            uri: configService.get('MONGODB_URI') ??
                                'mongodb://localhost:27017/agentic-eth',
                            connectionFactory: (connection) => {
                                connection.on('error', (error) => {
                                    console.warn('MongoDB connection error:', error);
                                    console.warn('Continuing without MongoDB for testing purposes');
                                });
                                return connection;
                            },
                        }),
                    }),
                ]),
            communicate_module_1.CommunicateModule,
            create_agent_module_1.CreateAgentModule,
            zee_module_1.ZeeModule,
            openai_module_1.OpenAIModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map