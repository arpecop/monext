
// This is the function that returns the SVG code
import { initWasm } from '@resvg/resvg-wasm';

import type { APIRoute } from "astro";
import satori from 'satori';
import { html } from "satori-html";
import resvgwasm from '../../../index_bg.wasm';



// get roboto font using fetch, woff2 not supported 
const robotoArrayBuffer = await (
  await fetch(
    'https://userz.net/roboto.ttf',
  )
).arrayBuffer();

export const GET: APIRoute = async ({ params }) => {

  try {
    await initWasm(resvgwasm as WebAssembly.Module);
  } catch (error) {
    console.error('Resvg wasm not initialized');
  }
  const markup = html`<div style="color: white; background-color: black; height: 400">hello, world1 ${params.id}</div>` as any;

  const svg = await satori(markup,
    {
      width: 600,
      height: 400,

      fonts: [
        {
          name: 'Roboto',
          data: robotoArrayBuffer,
          weight: 400,
          style: 'normal',
        },
      ],
    },
  );



  return new Response(svg, {
    status: 200,
    headers: {
      "content-type": "image/svg+xml",
    },
  });
}

// Get all posts that are not drafts
