import { ChromaClient } from "chromadb";
const chroma = new ChromaClient({ path: "https://chroma.userz.net" });

export const getsimilar = async (
  id: string,
  limit?: number
): Promise<{ id: number; payload: { id: string } }[]> => {
  const data = await fetch(
    "https://vector.kloun.lol/collections/answers/points/recommend",
    {
      body: JSON.stringify({
        limit: limit || 10,
        positive: [id],
        offset: 0,
        with_payload: true,
        with_vector: false,
        using: null,
      }),
      headers: {
        Accept: "application/json",
        "api-key": "AppleWebKit",
        "Content-Type": "application/json",
      },
      method: "POST",
    }
  );
  const json = await data.json();

  return Promise.resolve(json.result);
};
export const getchroma = async (
  id: string,
  limit?: number
): Promise<string[]> => {
  const collection = await chroma.getCollection({ name: "questions" })
  const d = await collection.get({
    ids: [id], //ids
    include: ['embeddings'],
  })
  const queryData = await collection.query({
    queryEmbeddings: d.embeddings[0],
    nResults: limit || 10,
  });

  return Promise.resolve(queryData.documents[0]);
};
