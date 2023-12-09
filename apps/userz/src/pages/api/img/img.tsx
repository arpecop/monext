import satori from 'satori'
// get roboto font using fetch, woff2 not supported 
const robotoArrayBuffer = await (
  await fetch(
    'https://userz.net/roboto.ttf',
  )
).arrayBuffer()



export const svg = await satori({
  type: 'div',
  props: {
    children: 'hello, world1',
    style: { color: 'black' },
  },
},
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
)