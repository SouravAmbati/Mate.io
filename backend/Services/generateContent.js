import dotenv from "dotenv";
dotenv.config();
import { GoogleGenAI } from "@google/genai";


const key = process.env.GEMINI_API_KEY ;
if (!key) throw new Error("GEMINI_API_KEY is missing or empty!");

const ai = new GoogleGenAI({ apiKey: key });

export async function generateNote(topic) {
  const prompt = `
Generate notes about the topic: "${topic}" in clean, valid HTML that can be rendered directly in a Quill editor.

Instructions:
1. Include only content relevant to the topic. Do not create extra sections, headings, or placeholders that aren't naturally part of the topic.
2. Use <h2> or <h3> only if the text naturally requires headings.
3. Use <p> for paragraphs, <ul><li>…</li></ul> for bullet points, and <ol><li>…</li></ol> for step-by-step instructions as needed.
4. Only generate fully valid HTML. Do not include Markdown, code blocks, or any extra wrappers.
5. Output only the HTML content, nothing else.

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



