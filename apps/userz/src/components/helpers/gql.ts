const queries = {
  questions: `
  query MyQueryq($limit: Int = 10, $offset: Int = 0,$_eq: String = "dd4d9d64",) {
   qlatest(limit: $limit, offset: $offset, order_by: {latest_answer_id: desc}) {
     text
     genid
   }
    qtags(limit: 50 ,order_by: {count: desc}, where: {count: {_gte: "110"}}) {
      count
      hashtag
    }
  }
  `,
  thread: `
  query MyQuery($_eq: String = "166a31a8", $limit: Int = 200, $offset: Int = 0) {
    q: questions(where: {genid: {_eq: $_eq}, type: {_eq: "q"}}) {
      text
      uid

    }
    thread: questions(where: {genid: {_eq: $_eq},type: {_eq: "a"}},limit: $limit, offset: $offset, order_by: {id: desc}) {
      text
      uid
      id
    }
    random: qlatest(where: {genid: {_lt: $_eq}}, limit: 10) {
      genid
      text
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
query MyQuery($_in: [String!]) {
  qtags(where: {hashtag: {_in: $_in}}) {
    count
    hashtag
    rows_with_tag
  }
}
`,
  specificids: `
query MyQuery($_in: [String!] = ["84f3861e"]) {
  questions(where: {genid: {_in: $_in}, type: {_eq: "q"}}) {
    text
    genid
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
