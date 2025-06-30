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
exports.ZeeService = void 0;
const common_1 = require("@nestjs/common");
const zee_repository_1 = require("./zee.repository");
let ZeeService = class ZeeService {
    constructor(ZeeRepository) {
        this.ZeeRepository = ZeeRepository;
    }
    async create(createZeeDto) {
        const data = await this.ZeeRepository.create(createZeeDto);
        return data;
    }
    async runZeeWorkflow(zeeName) {
        const data = await this.ZeeRepository.findByName(zeeName);
        console.log(`Zee workflow ${zeeName} found, but Covalent agent service has been removed.`);
        return {
            message: `Zee workflow ${zeeName} found, but Covalent agent service has been removed.`
        };
    }
};
exports.ZeeService = ZeeService;
exports.ZeeService = ZeeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [zee_repository_1.ZeeRepository])
], ZeeService);
//# sourceMappingURL=zee.service.js.map