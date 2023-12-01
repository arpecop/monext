export const getsimilar = async (
  id: number
): Promise<{ result: { id: number; payload: { id: string } }[] }> => {
  const data = await fetch(
    "https://vector.kloun.lol/collections/qustionz/points/recommend",
    {
      body: JSON.stringify({
        limit: 10,
        positive: [id],
        offset: 0,
        with_payload: true,
        with_vector: false,
        using: null,
      }),
      cache: "default",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "api-key": "AppleWebKit",
        "Content-Type": "application/json",
      },
      method: "POST",
      mode: "cors",
    }
  );
  const json = await data.json();
  return Promise.resolve(json.result);
};
