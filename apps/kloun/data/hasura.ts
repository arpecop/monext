const urlh = "https://rudix.hasura.app/api/rest/";

export async function sql(query: string) {
  // Default options are marked with *
  const response = await fetch("https://sql.monastro.workers.dev", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.

    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({ query }), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export const viewh = (endpoint: string, params?: any) => {
  const urlparams = new URLSearchParams(params).toString();
  const res = fetch(`${urlh}${endpoint}${params ? "?" + urlparams : ""}`).then(
    (response) => response.json()
  );
  return res;
};

export const geth = (id: string) => {
  const res = fetch(`${urlh}${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "appication/json",
      "x-hasura-role": "public",
    },
  })
    .then((response) => response.json())
    .catch((e) => e);
  return res;
};

export default {
  viewh,
  geth,
};

//dasdasd
