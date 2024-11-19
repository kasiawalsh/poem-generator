import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();

console.log("OpenAI API Key Loaded:", !!process.env.OPENAI_API_KEY); // This will print `true` if the key is loaded

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function chatCompletion(prompt) {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-4o-mini",
    });
    return chatCompletion.choices[0].message.content;
}

export default chatCompletion;