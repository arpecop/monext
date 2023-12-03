export const getsimilar = async (
  id: number,
  limit?: number
): Promise<{ id: number; payload: { id: string } }[]> => {
  const data = await fetch(
    "https://vector.kloun.lol/collections/qustionz/points/recommend",
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
