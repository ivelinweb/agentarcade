import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export enum SDK {
  AGENT_KIT = 'agent-kit',
  // COVALENT option removed
}

export enum TYPE {
  SOCIAL = 'social',
  DEFI = 'defi',
  GAME = 'game',
  AI_COMPANION = 'ai-companion',
}

export class CreateAgentDto {
  @IsString()
  @IsNotEmpty()
  agentName: string;

  @IsString()
  @IsNotEmpty()
  agentDescription: string;

  @IsString()
  @IsNotEmpty()
  sdk: SDK;

  @IsString()
  @IsNotEmpty()
  chain: string;

  @IsString()
  @IsNotEmpty()
  agentType: TYPE;

  //!figure out how to add tasks
  @IsString()
  @IsNotEmpty()
  task: string;
}

export class CreateElizaAgentDto {
  @IsString()
  @IsNotEmpty()
  agentName: string;

  @IsArray()
  @IsNotEmpty()
  bio: Array<string>;

  @IsString()
  @IsNotEmpty()
  type: TYPE;

  @IsArray()
  knowledge: string[];

  @IsString()
  chain?: string;

  @IsString()
  contractAddress?: string;
}
