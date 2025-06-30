import { Zee } from './zee.schema';
import { Model } from 'mongoose';
import { CreateZeeDto } from './dto/create-zee.dto';
export declare class ZeeRepository {
    private readonly skipMongoDB;
    private readonly zeeModel?;
    constructor(zeeModel?: Model<Zee>);
    create(createZeeDto: CreateZeeDto): Promise<(import("mongoose").Document<unknown, {}, Zee, {}> & Zee & {
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
    findAll(): Promise<Zee[]>;
    findByName(name: string): Promise<Zee>;
}
