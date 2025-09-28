import dotenv from "dotenv";
dotenv.config();
import { GoogleGenAI } from "@google/genai";


const key = process.env.GEMINI_API_KEY ;
if (!key) throw new Error("GEMINI_API_KEY is missing or empty!");

const ai = new GoogleGenAI({ apiKey: key });

export async function generateNote(topic) {
   const prompt = `
Generate notes about the topic: "${topic}" in clean, valid HTML that can be rendered directly in a Quill editor.
Use headings, paragraphs, and lists appropriately.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  });

  console.log(JSON.stringify(response, null, 2)); // <--- log the full response

  // Try multiple possible paths:
  const text =
    response?.candidates?.[0]?.content?.[0]?.text ||
    response?.candidates?.[0]?.content?.[0]?.parts?.[0]?.text ||
    response?.candidates?.[0]?.content?.[0]?.text?.[0];

  if (!text) throw new Error("No content received from Gemini API.");

  return text;
}



