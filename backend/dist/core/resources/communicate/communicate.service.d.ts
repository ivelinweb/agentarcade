import { CoinbaseAgentService } from 'src/lib/coinbase-agent/coinbase-agent.service';
import { CommunicateDto } from './dto/communicate.dto';
import { CreateAgentRepository } from '../create-agent/create-agent.repository';
import { CreateElizaAgentRepository } from '../create-agent/create-eliza-agent.repository';
import { OpenAIService } from 'src/lib/openai/openai.service';
export declare class CommunicateService {
    private readonly agentKitService;
    private readonly createAgentRepository;
    private readonly createElizaAgentRepository;
    private readonly openAIService;
    constructor(agentKitService: CoinbaseAgentService, createAgentRepository: CreateAgentRepository, createElizaAgentRepository: CreateElizaAgentRepository, openAIService: OpenAIService);
    comunicate(agentName: string, communicateDto: CommunicateDto): Promise<any>;
}
