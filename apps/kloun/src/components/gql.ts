const queries = {
  jokescat: `query MyQuery($limit: Int = 1, $offset: Int = 10, $_eq: String = "JOKРазни") {
    jokes(limit: $limit, offset: $offset, where: {cat: {_eq: $_eq}}) {
      joke
      uid
      cat
    }
    aggregator(where: {cat_with_suffix: {_eq: $_eq}}) {
      cat_with_suffix
      total_count
    }
  }`,
  jokesingle: `query MyQuery($_eq: String = "-7Eq3qb1N3X", $limit: Int = 30) {
    jokes(where: {uid: {_lt: $_eq}, lang: {_eq: "bg"}}, limit: $limit) {
      joke
      cat
      uid
    }
    joke: jokes_by_pk(uid: $_eq) {
      id
      joke
      uid
      cat
    }
  }
`,
} as { [key: string]: string };

export const gql = async (
  queryid: string,
  variables: { _eq?: string; _in?: string[]; limit?: number; offset?: number }
) => {
  return new Promise((resolve) => {
    fetch("https://rudix.hasura.app/v1/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: queries[queryid],
        variables,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        resolve(result.errors || result.data);
      });
  });
};
