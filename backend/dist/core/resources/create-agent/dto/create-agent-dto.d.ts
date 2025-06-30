export declare enum SDK {
    AGENT_KIT = "agent-kit"
}
export declare enum TYPE {
    SOCIAL = "social",
    DEFI = "defi",
    GAME = "game",
    AI_COMPANION = "ai-companion"
}
export declare class CreateAgentDto {
    agentName: string;
    agentDescription: string;
    sdk: SDK;
    chain: string;
    agentType: TYPE;
    task: string;
}
export declare class CreateElizaAgentDto {
    agentName: string;
    bio: Array<string>;
    type: TYPE;
    knowledge: string[];
    chain?: string;
    contractAddress?: string;
}
