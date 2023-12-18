

const clientssr = (query: string, variables: any, token: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    fetch('https://hasura.kloun.lol/v1/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // if your server uses Bearer tokens for authentication
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}



export default clientssr;