import { useMutation } from "@tanstack/react-query";

type TAgentArgs = {
  agentName: string;
  agentBio: string;
  sdk?: string;
  chain?: string;
  agentType?: string;
  knowledge?: string;
};

export const useCreateAgent = () => {
  const createAgent = async (agentArgs: TAgentArgs) => {
    const knowledgeArray = agentArgs.knowledge?.split(",").map((item) => item.trim());

    // Always use the rootstock endpoint
    const endpoint = "/create-agent/rootstock";

    const data = await fetch(endpoint, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...agentArgs, knowledge: knowledgeArray }),
    });

    const response = await data.json();

    return response;
  };

  return useMutation({
    mutationKey: ["create_agent"],
    mutationFn: createAgent,
  });
};
