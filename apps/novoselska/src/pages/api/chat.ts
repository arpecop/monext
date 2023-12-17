import type { APIContext } from "astro";

export const prerender = false

async function fetchGraphQL(operationsDoc: string, operationName: string, variables: { channel: string; chunk: string; messID: string; }) {
  const result = await fetch(
    "https://hasura.kloun.lol/v1/graphql",
    {
      method: "POST",
      body: JSON.stringify({
        query: operationsDoc,
        variables: variables,
        operationName: operationName
      })
    }
  );

  return await result.json();
}

const operationsDoc = `
  mutation MyMutation($channel: String = "", $chunk: String = "", $messID: String = "") {
    insert_work_chat_one(object: {channel: $channel, chunk: $chunk, messID: $messID}) {
      id
    }
  }
`;
function executeMyMutation(channel: string, chunk: string, messID: string) {
  return fetchGraphQL(
    operationsDoc,
    "MyMutation",
    { "channel": channel, "chunk": chunk, "messID": messID }
  );
}

export async function POST({ request }: APIContext) {
  // get the message from the request body
  const jsonData = await request.json();
  const { message, channelid, messID } = jsonData;
  console.log(message, channelid, messID);


  const url = "https://api.cloudflare.com/client/v4/accounts/d453356c9cc405872f59af5de88d1375/ai/run/@cf/mistral/mistral-7b-instruct-v0.1";
  const options = {
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${process.env.CLOUDFLARE_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "prompt": 'ти си виртуален асистент  който  говори само Български. оттоваряш само на въпроси в сферата на: психиатрия , психично здраве и емоционална хармонния. Отговори на този въпрос : ' + message,
      "stream": true
    })
  };


  const response = await fetch(url, options);
  const reader = response.body?.getReader();
  const decoder = new TextDecoder();
  let combinedResponse = '';

  const stream = async () => {
    return new Promise((resolve) => {
      new ReadableStream({
        async start(controller) {
          while (true) {
            const { done, value } = await (reader as ReadableStreamDefaultReader).read();
            if (done) {
              console.log('Stream complete');
              resolve(42);
              break;
            }

            const chunk = decoder.decode(value).replace('data: {\"response\":\"', '').replace('\"}\n\n', '').replace('data: [DONE]', '');
            combinedResponse += chunk;




            await executeMyMutation(channelid, chunk, messID);
            controller.enqueue(chunk);


          }

          controller.close();
        }
      });
    })
  }
  await stream();

  return new Response(JSON.stringify({ response: combinedResponse }), {
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });


};