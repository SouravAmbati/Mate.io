import dotenv from "dotenv";
dotenv.config();
import { GoogleGenAI } from "@google/genai";


const key = process.env.GEMINI_API_KEY ;
if (!key) throw new Error("GEMINI_API_KEY is missing or empty!");

const ai = new GoogleGenAI({ apiKey: key });

export async function generateNote(topic) {
  const prompt = `
Generate notes about the topic: "${topic}" in proper, clean HTML.

Rules:
1. Output only relevant content for the topic. Do not create extra sections or placeholders.
2. Use <h2> for main titles, <h3> for subheadings.
3. Use <p> for paragraphs.
4. Use <ul><li>…</li></ul> for bullet points.
5. Use <ol><li>…</li></ol> for step-by-step instructions.
6. Only generate valid, fully closed HTML tags.
7. Do not include Markdown or code blocks.
8. Output should be directly renderable in a Quill editor.

Topic: ${topic}
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



