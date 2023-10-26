import { neon } from "@neondatabase/serverless";

const apiBaseUrl = process.env.DB_URL1 || "";
export const sql = neon(apiBaseUrl);

const queries = {
  questions: `
 query MyQuery($limit: Int = 10) {
   qlatest(limit: $limit) {
     text
     genid
   }
   qtags(order_by: {count: desc},limit: 50 ) {
     count
     hashtag
   }
 }
  `,
  questionssql: `select * from qlatest order by id desc limit 30;`,
  thread: `
query MyQuery($_eq: String = "b82f99b1") {
        q: questions(where: {genid: {_eq: $_eq}, type: {_eq: "q"}}) {
        text
        uid
      }
    thread:questions(where: {genid: {_eq: $_eq}, type: {_eq: "a"}}  order_by: {id: desc}) {
      text
      genid
      uid
      type
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
query MyQuery2($_in: [String!]) {
    qtags(where: {hashtag: {_in: $_in}}) {
      count
      hashtag
   
    }
  }
`,
  specificids: `
query MyQuery($_in: [String!] = ["84f3861e"]) {
    questions(where: {genid: {_in: $_in}, type: {_eq: "q"}}) {
      text
      genid
    }
    answers:questions(where: {genid: {_in: $_in}, type: {_eq: "a"}}) {
      text
      genid
    }
  }
`,
  specificidsthreads: `
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
        query: queryid.length < 20 ? queries[queryid] : queryid,
        variables,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        resolve(result.errors || result.data);
      });
  });
};
