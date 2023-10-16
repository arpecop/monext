export const gql = async (
  queryid: string,
  variables: {
    _eq?: string;
    _in?: string[];
    limit?: number;
    offset?: number;
    object?: { [key: string]: string };
  }
) => {
  return new Promise((resolve) => {
    fetch("https://rudix.hasura.app/v1/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: queryid,
        variables,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        resolve(result.errors || result.data);
      });
  });
};

const get = async (id: string): Promise<any> => {
  return new Promise(async (resolve) => {
    const data = await gql(
      `query MyQuery($_eq: String = "01H84F7XPSG1ESNF20HDTRFSCC") {
	  newsbg_by_pk(nid: $_eq) {
	    html
	    title
	    id
	    nid
	  }
	}`,
      { _eq: id }
    );

    resolve(data);
  });
};

const insert = async (object: { [key: string]: string }) => {
  const insertx = await gql(
    `mutation MyMutation( $object: newsbg_insert_input = {}) {
		  insert_newsbg_one(object: $object) {
		    id
		    nid
		  }
		}`,
    { object }
  );
  console.log(object, insertx);
  return insert;
};

export const db = {
  get,
  insert,
};
