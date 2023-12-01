export const gquery = async (
  query: string,
  variables?: { [key: string]: number | string }
) => {
  const response = await fetch("https://hasura.kloun.lol/v1/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await response.json();
  console.log(json);
  return Promise.resolve(json.data);
};
