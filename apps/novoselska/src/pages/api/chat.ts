import type { APIContext } from "astro";
import OpenAI from "openai";
import client from '../../lib/clientssr';
import { topics } from '../../lib/topics';
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
  const { message, userid, threadid, topic } = jsonData;
  console.log(jsonData);

  const topicd = topics.find(predicate => predicate.id === topic)
  const instructions = topic === 1000 ? "" : '  Отговаряш само на въпроси в сферата на: "' + topicd?.topic + '". ' + topicd?.data.instruct as string;


  function sleep(seconds: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }
  const isThread = threadid;
  await openai.beta.assistants.update("asst_QKnm963fMmdJeLFKd2bfnIls", {
    instructions: topics[0]?.data.instruct + ' ' + instructions as string,
  })
  const [assistant, thread] = await Promise.all([
    openai.beta.assistants.retrieve("asst_QKnm963fMmdJeLFKd2bfnIls"),
    !isThread ? openai.beta.threads.create({
      messages: [
        {
          role: "user",
          content: message,
        }
      ],
    })
      :
      openai.beta.threads.messages.create(isThread,
        {
          role: "user",
          content: message,
        }
      ),
  ]);


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
  const machineMessage = messages.data.reverse()[messages.data.length - 1];

  let chunk: string | undefined;
  if (machineMessage?.content[0]?.type === 'text') {
    chunk = machineMessage?.content[0]?.text.value;
  }
  await client(CREATE_MESSAGE,
    {
      object: {
        userid,
        'message': message,
        'threadid': machineMessage?.thread_id,
        msgid: 'user',
      }
    }
  );
  await client(CREATE_MESSAGE,
    {
      object: {
        userid,
        'message': chunk,
        'threadid': machineMessage?.thread_id,
        msgid: 'system',
      }
    }
  );

  return new Response(JSON.stringify({}), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}  
