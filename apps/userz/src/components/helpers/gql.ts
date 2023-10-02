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
  tags: `
  query MyQuery($_eq: String = "SafetyFirst") {
    qtags(  where: {hashtag: {_eq: $_eq}}) {
      count
      hashtag
      rows_with_tag
    }
  }
`,
  tagquestions: `
  query MyQuery($_in: [String!] = ["02cda840", "01e4a346"]) {
  questions(where: {genid: {_in: $_in}, type: {_eq: "q"}}) {
  genid
  text
}
}`,
  specifictags: `
query MyQuery($_in: [String!] = ["avocadopit"]) {
  qtags(where: {hashtag: {_in: $_in}}) {
    count
    hashtag
    rows_with_tag
  }
}
`,
} as { [key: string]: string };

export const gql = async (
  queryid: string,
  variables: { _eq?: string; _in?: string[]; limit: number; offset: number }
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
