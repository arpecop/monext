import type { APIContext } from "astro";
export async function POST({ request }: APIContext) {
  const jsonData = await request.json();


  const { message } = jsonData;


  const url = "https://api.cloudflare.com/client/v4/accounts/d453356c9cc405872f59af5de88d1375/ai/run/@cf/mistral/mistral-7b-instruct-v0.1";
  const options = {
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${process.env.CLOUDFLARE_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "prompt": 'ти си виртуален асистент на  говори само Български. оттоваряш само на въпроси в сферата на: психиатрия , психично здраве и емоционална хармонния. Отговори на този въпрос : ' + message,
      "stream": true
    })
  };

  try {
    const response = await fetch(url, options);
    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      async start(controller) {
        while (true) {
          const { done, value } = await (reader as ReadableStreamDefaultReader).read();
          if (done) {
            break;
          }

          const chunk = decoder.decode(value);

          // console.log({ chunk });
          fetch('https://socket.kloun.lol/yourChannelId1', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: chunk.replace('data: ', '').replaceAll('\n', '').replace('[DONE]', '{\"response\":\"\"}') }),
          })
          controller.enqueue(chunk);

        }

        controller.close();
      }
    });


    return new Response(JSON.stringify({ done: 'ok' }), {
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });
  } catch (err) {

    return new Response(JSON.stringify(err), {
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });
  }
};