
import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: "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" as string,
});
// Hardcoded thread ID for simplicity
const hardcodedThreadId = 'thread_dbzMmGaLI3LoRcRSpj5U1RV8';

// Function to create an assistant
const createAssistant = async () => {
  const assistant = await openai.beta.assistants.retrieve('asst_A2dzi4nuvS24zXBhqNuHon03');
  return assistant;
};

// Function to use OpenAI prompts
const usePrompts = async (
  assistantId: string,
  prompt: string
) => {
  // Use the prompt with hardcoded thread ID
  const response = await openai.beta.threads.createAndRun({
    assistant_id: assistantId,
    thread: {
      id: hardcodedThreadId,
      messages: [
        { role: "user", content: prompt },
      ],
    },
  });

  return response.choices[0].text;
};

// Example usage
const main = async () => {
  const assistant = await createAssistant();

  // Use prompt to check threadiness and memory
  const result = await usePrompts(
    assistant.id,
    "Your prompt to check threadiness and memory"
  );

  console.log("Response:", result);
};

main();
