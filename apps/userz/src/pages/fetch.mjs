async function run(input) {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/d453356c9cc405872f59af5de88d1375/ai/run/@cf/mistral/mistral-7b-instruct-v0.1`,
    {
      headers: {
        Authorization: "Bearer QKQwFrN1LHxeCzxOJ2K1unykJrHVnNubVLA9_-SX",
      },
      method: "POST",
      body: JSON.stringify(input),
    }
  );
  const result = await response.json();
  return result;
}

run({
  messages: [
    {
      role: "system",
      content: "You are a friendly assistant that helps write stories",
    },
    {
      role: "user",
      content:
        "Write a short story about a llama that goes on a journey to find an orange cloud",
    },
  ],
}).then((response) => {
  console.log(JSON.stringify(response));
});
