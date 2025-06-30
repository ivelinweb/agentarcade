import { Agent, AgentName } from '@covalenthq/ai-agent-sdk';
import { ZeeWorkflowState } from '@covalenthq/ai-agent-sdk/dist/core/state';
import { ConfigService } from '@nestjs/config';
import { CreateAgentRepository } from 'src/core/resources/create-agent/create-agent.repository';
import type { ChatCompletionMessageParam } from 'openai/resources/chat/completions';
export declare class CovalentAgentService {
    private readonly createAgentRepository;
    private readonly configService;
    constructor(createAgentRepository: CreateAgentRepository, configService: ConfigService);
    initializeAgent(agentName: string): Promise<{
        agent: Agent;
        tools: any;
    }>;
    runCovalentAgent(agentName: string, userInput: string): Promise<Required<{
        agent: AgentName;
        messages: ChatCompletionMessageParam[];
        status?: "idle" | "running" | "paused" | "failed" | "finished";
        children?: ZeeWorkflowState[];
    }>>;
    private runToolCalls;
    private createStateFn;
}
