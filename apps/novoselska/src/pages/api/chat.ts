import type { APIContext } from "astro";
import OpenAI from "openai";
import client from '../../lib/clientssr';
// https://web.descript.com/drives/d55c9db5-9956-4b41-aa88-99bc8ea76d92/join?invite_link_token=Yh6SSfQyya2NazRIDtuDNP
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY as string,
});
const CREATE_MESSAGE = `
mutation MyMutation($object: chat_history_insert_input = {}) {
  insert_chat_history_one(object: $object) {
    id
  }
}
 `


export async function POST({ request }: APIContext) {
  const jsonData = await request.json();
  const { message, userid, threadid } = jsonData;

  function sleep(seconds: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }
  const isThread = 'thread_NyR0u3TPYngxzmubUCQeS16Q';

  const [assistant, thread] = await Promise.all([
    openai.beta.assistants.retrieve("asst_QKnm963fMmdJeLFKd2bfnIls"),
    !isThread ? openai.beta.threads.create({
      messages: [
        {
          role: "user",
          content:
            message,
        }
      ],
    }) : openai.beta.threads.messages.create(isThread,
      {
        role: "user",
        content:
          message,
      }
    ),
  ]);
  console.log(thread);

  const threadID = isThread || thread.id;

  let run = await openai.beta.threads.runs.create(
    threadID,
    { assistant_id: assistant.id },
  );
  while (run.status === "queued" || run.status === "in_progress") {
    await sleep(0.5);
    run = await openai.beta.threads.runs.retrieve(threadID, run.id);
    console.log(run.started_at, run.status);
  }
  // get thread messages by id
  const messages = await openai.beta.threads.messages.list(threadID);
  const machineMessage = messages.data[messages.data.length - 1];
  console.log(JSON.stringify(messages.data.reverse(), null, 2));
  const x = await client(CREATE_MESSAGE,
    {
      object: {
        userid,
        'chunk': machineMessage?.content?.text.value,
        'thread.id': machineMessage?.thread_id,
        threadid,
      }
    }
  );
  console.log(x);

  return new Response(JSON.stringify({}), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}  
