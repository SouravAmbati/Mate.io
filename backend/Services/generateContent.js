import dotenv from "dotenv";
dotenv.config();
import { GoogleGenAI } from "@google/genai";


const key = process.env.GEMINI_API_KEY ;
if (!key) throw new Error("GEMINI_API_KEY is missing or empty!");

const ai = new GoogleGenAI({ apiKey: key });

export async function generateNote(topic) {
  const prompt = `
Generate comprehensive notes about the topic: "${topic}" in clean HTML suitable for direct insertion into a Quill editor.
Requirements:
1. Use <h1>, <h2>, <h3> for headings, <p> for paragraphs, <ul> and <li> for lists.
2. Wrap code examples in <pre><code> blocks with proper indentation.
3. Avoid outer <html>, <head>, or <body> tags; only provide the inner content.
4. Include examples, key points, and explanations, formatted neatly in HTML.
5. Do not add any explanations outside HTML.
`;
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: prompt,
//   });

//  return response.candidates?.[0]?.content?.parts?.[0]?.text || "";

const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  });

  return response.text
}



