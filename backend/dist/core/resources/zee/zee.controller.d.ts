import { ZeeService } from './zee.service';
import { CreateZeeDto } from './dto/create-zee.dto';
export declare class ZeeController {
    private readonly zeeService;
    constructor(zeeService: ZeeService);
    create(createZeeDto: CreateZeeDto): Promise<(import("mongoose").Document<unknown, {}, import("./zee.schema").Zee, {}> & import("./zee.schema").Zee & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | {
        _id: string;
        goal: string;
        zeeName: string;
        zeeDescription: string;
        zeeGoal: string;
        agents: Array<string>;
    }>;
}
