import { gql } from '@apollo/client';
import type { APIContext } from "astro";
import OpenAI from "openai";
import client from '../../lib/client';
// https://web.descript.com/drives/d55c9db5-9956-4b41-aa88-99bc8ea76d92/join?invite_link_token=Yh6SSfQyya2NazRIDtuDNP
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY as string, // This is the default and can be omitted
});
const CREATE_MESSAGE_MUTATION = gql`
  mutation CreateMessage($channelid: String!, $message: String!) {
    insert_work_chat_one(object: { channel: $channelid, chunk: $message }) {
      id
      channel
      chunk
    }
  }
 `


export async function POST({ request }: APIContext) {
  // get the message from the request body
  const jsonData = await request.json();
  const { message, channelid } = jsonData;

  const response = await client.mutate({
    mutation: CREATE_MESSAGE_MUTATION,
    variables: {
      channelid,
      message,
    },
  });

  // const thread = await openai.beta.threads.create();

  const thread = { id: 'thread_L9y72a4cdm36ccfC7T7C35H5' }

  // const run1 = await openai.beta.threads.runs.create(thread.id, {
  //   assistant_id: "asst_A2dzi4nuvS24zXBhqNuHon03",
  // });



  // work in progress
  await openai.beta.threads.messages.create(thread.id, {
    content: "Кой си ти ? ",
    role: 'user'
  });
  const createRun = await openai.beta.threads.runs.create(thread.id, {
    assistant_id: 'asst_A2dzi4nuvS24zXBhqNuHon03',
  })
  const [run, { data: messages }] = await Promise.all([
    openai.beta.threads.runs.retrieve(thread.id, createRun.id),
    openai.beta.threads.messages.list(thread.id),
  ])


  let runx = await openai.beta.threads.runs.retrieve(run.thread_id, run.id);

  // check every 2 seconds if the run is completed
  while (runx.status !== "completed") {
    await new Promise((r) => setTimeout(r, 1000));
    runx = await openai.beta.threads.runs.retrieve(run.thread_id, run.id);
    const messages = await openai.beta.threads.messages.list(thread.id);
    console.log(JSON.stringify(messages.data.reverse()), thread.id);
  }

  return new Response(JSON.stringify({}), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });


}  
