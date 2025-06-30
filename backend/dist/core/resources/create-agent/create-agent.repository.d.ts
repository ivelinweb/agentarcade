import { Agent } from './agent.schema';
import { Model } from 'mongoose';
export declare class CreateAgentRepository {
    private readonly skipMongoDB;
    private readonly agentModel?;
    constructor(agentModel?: Model<Agent>);
    create(agent: any): Promise<any>;
    findByName(agentName: string): Promise<Agent>;
}
