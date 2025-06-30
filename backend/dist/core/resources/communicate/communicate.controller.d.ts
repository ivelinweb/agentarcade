import { CommunicateService } from './communicate.service';
import { CommunicateDto } from './dto/communicate.dto';
export declare class CommunicateController {
    private readonly communicateService;
    constructor(communicateService: CommunicateService);
    communicate(agentName: string, communicateDto: CommunicateDto): Promise<{
        response: any;
    }>;
}
