import openai from 'openai';

// Set your OpenAI API key
const apiKey = process.env.OPENAI_API_KEY || 'apiKey'

// Configure the OpenAI instance
const openaiInstance = new openai({ apiKey });

// Array of texts
const texts = [
  'Hello',
  'How are you?',
  'This is a test'
];

// Get embeddings
const embeddings = openaiInstance.embed(texts);

console.log(embeddings);
