const urlh = "https://rudix.hasura.app/api/rest/";

import { neon } from "@neondatabase/serverless";

const apiBaseUrl = process.env.DB_URL1 || "";
console.log(apiBaseUrl);
export const sql = neon(apiBaseUrl);

export const viewh = (endpoint: string, params?: any) => {
  const urlparams = new URLSearchParams(params).toString();
  console.log(`${urlh}${endpoint}?${urlparams}`, "<--- urlx");
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
