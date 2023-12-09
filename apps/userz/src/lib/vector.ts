// import { ChromaClient } from "chromadb";
// const chroma = new ChromaClient({ path: "https://chroma.userz.net" });

export const getsimilar = async (
  collection: string,
  id: string,
  limit?: number,
  with_vector?: boolean
): Promise<{ id: number; payload: { id: string }, vector?: number[] }[]> => {
  const data = await fetch(
    "https://vector.kloun.lol/collections/" + collection + "/points/recommend",
    {
      body: JSON.stringify({
        limit: limit || 10,
        positive: [id],
        offset: 0,
        with_payload: true,
        with_vector,
        using: null,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }
  );


  const json = await data.json();

  return Promise.resolve(json.result);
};

export async function getByVector(collection: string, targetVector: number[], limit: number): Promise<any> {
  const url = `https://vector.kloun.lol/collections/${collection}/points/search`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      vector: targetVector,
      limit,
      "with_payload": true,
    }),
  });



  const data = await response.json();
  return Promise.resolve(data.result);
}


// export const getchroma = async (
//   id: string,
//   limit?: number
// ): Promise<string[]> => {
//   const collection = await chroma.getCollection({ name: "questions" });

//   const d = await collection.get({
//     ids: "b96b83a4", //ids
//     include: ["embeddings"],
//   });

//   const queryData = await collection.query({
//     queryEmbeddings: d.embeddings[0],
//     nResults: limit || 10,
//   });



//   return Promise.resolve(queryData.documents[0]);
// };
