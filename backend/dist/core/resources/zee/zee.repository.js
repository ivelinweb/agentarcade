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
exports.ZeeRepository = void 0;
const common_1 = require("@nestjs/common");
const zee_schema_1 = require("./zee.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const inMemoryZees = [];
let ZeeRepository = class ZeeRepository {
    constructor(zeeModel) {
        this.skipMongoDB = process.env.SKIP_MONGODB === 'true';
        this.zeeModel = zeeModel;
    }
    async create(createZeeDto) {
        if (this.skipMongoDB) {
            const newZee = {
                ...createZeeDto,
                _id: Date.now().toString(),
                goal: createZeeDto.zeeGoal
            };
            inMemoryZees.push(newZee);
            return newZee;
        }
        const newZee = new this.zeeModel(createZeeDto);
        return await newZee.save();
    }
    async findAll() {
        if (this.skipMongoDB) {
            return inMemoryZees;
        }
        const data = await this.zeeModel.find().lean();
        return data;
    }
    async findByName(name) {
        if (this.skipMongoDB) {
            return inMemoryZees.find(zee => zee['zeeName'] === name) || null;
        }
        const data = await this.zeeModel.findOne({ zeeName: name }).lean();
        return data;
    }
};
exports.ZeeRepository = ZeeRepository;
exports.ZeeRepository = ZeeRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Optional)()),
    __param(0, (0, mongoose_1.InjectModel)(zee_schema_1.Zee.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ZeeRepository);
//# sourceMappingURL=zee.repository.js.map