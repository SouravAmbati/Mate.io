import dotenv from "dotenv";
dotenv.config();
import { GoogleGenAI } from "@google/genai";


const key = process.env.GEMINI_API_KEY ;
if (!key) throw new Error("GEMINI_API_KEY is missing or empty!");

const ai = new GoogleGenAI({ apiKey: key });

export async function generateNote(topic) {
  const prompt = `
You are a helpful note generator.
Generate a structured, easy-to-read note on the topic: "${topic}".

Follow this format strictly:
---
Title: <clear title of the topic>

Definition:
- Provide a short definition or introduction.

Key Points:
- Use bullet points to explain the important concepts.

Step-by-Step Explanation:
1. Explain the concept in step 1
2. Explain the concept in step 2
3. Continue until the topic is clear.

Example:
- Give a simple, practical example.

Conclusion:
- Summarize in 2–3 lines.
---

no markdown
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

 return response.text
}



