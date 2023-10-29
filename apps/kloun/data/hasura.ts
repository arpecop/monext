const urlh = "https://rudix.hasura.app/api/rest/";

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

//dasdasddasd
