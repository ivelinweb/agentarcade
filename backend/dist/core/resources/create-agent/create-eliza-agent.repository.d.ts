import { ElizaAgent } from './agent.schema';
import { Model } from 'mongoose';
import { CreateElizaAgentDto } from './dto/create-agent-dto';
export declare class CreateElizaAgentRepository {
    private readonly skipMongoDB;
    private readonly elizaAgentModel?;
    constructor(elizaAgentModel?: Model<ElizaAgent>);
    create(createElizaAgentDto: CreateElizaAgentDto & {
        imageName: string;
        containerName: string;
        port: number;
    }): Promise<(import("mongoose").Document<unknown, {}, ElizaAgent, {}> & ElizaAgent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | {
        _id: string;
        createdAt: Date;
        agentName: string;
        bio: Array<string>;
        type: import("./dto/create-agent-dto").TYPE;
        knowledge: string[];
        chain?: string;
        contractAddress?: string;
        imageName: string;
        containerName: string;
        port: number;
    }>;
    findByName(agentName: string): Promise<(ElizaAgent & {
        createdAt: Date;
    }) | (import("mongoose").Document<unknown, {}, ElizaAgent, {}> & ElizaAgent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })>;
    findLast(): Promise<(ElizaAgent & {
        createdAt: Date;
    }) | (import("mongoose").Document<unknown, {}, ElizaAgent, {}> & ElizaAgent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })>;
    findAll(): Promise<(ElizaAgent & {
        createdAt: Date;
    })[] | (import("mongoose").Document<unknown, {}, ElizaAgent, {}> & ElizaAgent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    deleteByName(agentName: string): Promise<boolean>;
}
