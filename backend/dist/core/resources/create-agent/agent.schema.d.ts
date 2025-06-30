import { SDK, TYPE } from './dto/create-agent-dto';
export declare class Agent {
    agentName: string;
    agentDescription: string;
    sdk: SDK;
    chain: string;
    task: Array<string>;
    agentType: TYPE;
}
export declare class ElizaAgent {
    agentName: string;
    bio: string[];
    type: string;
    knowledge: [string];
    imageName: string;
    containerName: string;
    port: number;
    chain?: string;
    contractAddress?: string;
}
export declare const AgentSchema: import("mongoose").Schema<Agent, import("mongoose").Model<Agent, any, any, any, import("mongoose").Document<unknown, any, Agent, any> & Agent & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Agent, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Agent>, {}> & import("mongoose").FlatRecord<Agent> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const ElizaAgentSchema: import("mongoose").Schema<ElizaAgent, import("mongoose").Model<ElizaAgent, any, any, any, import("mongoose").Document<unknown, any, ElizaAgent, any> & ElizaAgent & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ElizaAgent, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ElizaAgent>, {}> & import("mongoose").FlatRecord<ElizaAgent> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
