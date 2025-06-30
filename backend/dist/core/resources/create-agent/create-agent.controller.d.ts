import { CreateAgentService } from './create-agent.service';
import { CreateAgentDto, CreateElizaAgentDto } from './dto/create-agent-dto';
export declare class CreateAgentController {
    private readonly createAgentService;
    constructor(createAgentService: CreateAgentService);
    create(createAgentDto: CreateAgentDto): Promise<void>;
    createRootstockAgent(createElizaAgentDto: CreateElizaAgentDto): Promise<{
        status: import("@nestjs/common").HttpStatus;
        error?: undefined;
    } | {
        status: import("@nestjs/common").HttpStatus;
        error: any;
    }>;
    createFlowAgent(createElizaAgentDto: CreateElizaAgentDto): Promise<{
        status: import("@nestjs/common").HttpStatus;
        error?: undefined;
    } | {
        status: import("@nestjs/common").HttpStatus;
        error: any;
    }>;
    createOpenCampusCodexAgent(createElizaAgentDto: CreateElizaAgentDto): Promise<{
        status: import("@nestjs/common").HttpStatus;
        error?: undefined;
    } | {
        status: import("@nestjs/common").HttpStatus;
        error: any;
    }>;
    getAllAgents(): Promise<{
        status: import("@nestjs/common").HttpStatus;
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
        status: import("@nestjs/common").HttpStatus;
        error: any;
        agents?: undefined;
    }>;
    getAgentStats(): Promise<{
        status: import("@nestjs/common").HttpStatus;
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
        status: import("@nestjs/common").HttpStatus;
        error: any;
        stats?: undefined;
    }>;
    deleteAgent(agentName: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
        error?: undefined;
    } | {
        status: import("@nestjs/common").HttpStatus;
        error: any;
        message?: undefined;
    }>;
}
