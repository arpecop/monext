const queries = {
  questions: `
  query MyQueryq($limit: Int = 10, $offset: Int = 0,$_eq: String = "dd4d9d64",) {
    qlatest(limit: $limit, offset: $offset) {
      genid
      text
    }
    qtags(limit: 50 ,order_by: {count: desc}, where: {count: {_gte: "110"}}) {
      count
      hashtag
    }
  }
  `,
  thread: `
    query MyQuery($_eq: String = "dd4d9d64", $limit: Int = 100, $offset: Int = 0) {
      thread: questions(where: {genid: {_eq: $_eq}},  limit: $limit, offset: $offset) {
        id
        text
        uid
      }
    }
  `,
} as { [key: string]: string };
//dasdas
export const gql = async (
  queryid: string,
  variables: { [key: string]: string | number }
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
