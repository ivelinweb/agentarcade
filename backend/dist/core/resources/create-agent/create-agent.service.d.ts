import { HttpStatus } from '@nestjs/common';
import { CreateAgentDto, CreateElizaAgentDto } from './dto/create-agent-dto';
import { CreateAgentRepository } from './create-agent.repository';
import { CreateElizaAgentRepository } from './create-eliza-agent.repository';
export declare class CreateAgentService {
    private readonly createAgentRepository;
    private readonly createElizaAgentRepository;
    constructor(createAgentRepository: CreateAgentRepository, createElizaAgentRepository: CreateElizaAgentRepository);
    create(createAgentDto: CreateAgentDto): Promise<any>;
    getAllAgents(): Promise<{
        status: HttpStatus;
        agents: {
            id: any;
            agentName: any;
            bio: any;
            type: any;
            knowledge: any;
            chain: any;
            contractAddress: any;
            imageName: any;
            port: any;
            createdAt: any;
        }[];
        error?: undefined;
    } | {
        status: HttpStatus;
        error: any;
        agents?: undefined;
    }>;
    getAgentStats(): Promise<{
        status: HttpStatus;
        stats: {
            totalCharacters: {
                value: number;
                change: string;
            };
            totalGames: {
                value: number;
                change: string;
            };
            totalDefi: {
                value: number;
                change: string;
            };
            totalSocial: {
                value: number;
                change: string;
            };
        };
        error?: undefined;
    } | {
        status: HttpStatus;
        error: any;
        stats?: undefined;
    }>;
    deleteAgent(agentName: string): Promise<{
        status: HttpStatus;
        message: string;
        error?: undefined;
    } | {
        status: HttpStatus;
        error: any;
        message?: undefined;
    }>;
    createRootstockAgent(createElizaAgentDto: CreateElizaAgentDto): Promise<{
        status: HttpStatus;
        error?: undefined;
    } | {
        status: HttpStatus;
        error: any;
    }>;
}
