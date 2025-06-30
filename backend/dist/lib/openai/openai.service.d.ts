import { ConfigService } from '@nestjs/config';
export declare class OpenAIService {
    private configService;
    private openai;
    constructor(configService: ConfigService);
    generateResponse(agentName: string, agentBio: string[], userMessage: string): Promise<string>;
    private getFallbackResponse;
}
