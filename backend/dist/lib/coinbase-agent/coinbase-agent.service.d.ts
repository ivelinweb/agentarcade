import { ConfigService } from '@nestjs/config';
export declare class CoinbaseAgentService {
    private configService;
    private rootstockTestnet;
    constructor(configService: ConfigService);
    initializeAgent(): Promise<{
        agent: import("@langchain/langgraph").CompiledStateGraph<import("@langchain/langgraph").StateType<{
            messages: import("@langchain/langgraph").BinaryOperatorAggregate<import("@langchain/core/messages").BaseMessage[], import("@langchain/langgraph").Messages>;
        }>, import("@langchain/langgraph").UpdateType<{
            messages: import("@langchain/langgraph").BinaryOperatorAggregate<import("@langchain/core/messages").BaseMessage[], import("@langchain/langgraph").Messages>;
        }>, any, {
            messages: import("@langchain/langgraph").BinaryOperatorAggregate<import("@langchain/core/messages").BaseMessage[], import("@langchain/langgraph").Messages>;
        }, {
            messages: import("@langchain/langgraph").BinaryOperatorAggregate<import("@langchain/core/messages").BaseMessage[], import("@langchain/langgraph").Messages>;
            structuredResponse: {
                (): import("@langchain/langgraph").LastValue<Record<string, any>>;
                (annotation: import("@langchain/langgraph").SingleReducer<Record<string, any>, Record<string, any>>): import("@langchain/langgraph").BinaryOperatorAggregate<Record<string, any>, Record<string, any>>;
                Root: <S extends import("@langchain/langgraph").StateDefinition>(sd: S) => import("@langchain/langgraph").AnnotationRoot<S>;
            };
        } & {
            messages: import("@langchain/langgraph").BinaryOperatorAggregate<import("@langchain/core/messages").BaseMessage[], import("@langchain/langgraph").Messages>;
        }, import("@langchain/langgraph").StateDefinition>;
        config: {
            configurable: {
                thread_id: string;
            };
        };
    }>;
    runChatMode(agent: any, config: any, userInput: string): Promise<any>;
    runCoinbaseAgent(userInput: string): Promise<any>;
}
