
// Set your OpenAI API key
const apiKey = process.env.OPENAI_API_KEY || 'apiKey'
import fetch from 'node-fetch';
import { topics } from '../src/lib/topics.ts';
console.log(topics);
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  },
  body: JSON.stringify({
    input: 'Your text string goes here',
    model: 'text-embedding-ada-002'
  })
};

fetch('https://api.openai.com/v1/embeddings', requestOptions)
  .then(response => response.json())
  .then(data => {
    // Handle the response data here
    console.log(data);
  })
  .catch(error => {
    // Handle any errors here
    console.error(error);
  });
