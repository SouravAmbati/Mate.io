import dotenv from "dotenv";
dotenv.config();
import { GoogleGenAI } from "@google/genai";


const key = process.env.GEMINI_API_KEY ;
if (!key) throw new Error("GEMINI_API_KEY is missing or empty!");

const ai = new GoogleGenAI({ apiKey: key });

export async function generateNote(topic) {
  const prompt = `
You are a helpful note generator. Generate notes about the topic: "${topic}" in proper HTML format.

Guidelines:
1. Output only the notes related to the topic in HTML. Do not add extra sections or placeholders.
2. Use <h2> for the main topic title if applicable.
3. Use <h3> for subheadings if needed.
4. Use <p> for normal text/paragraphs.
5. Use <ul><li>…</li></ul> for bullet points.
6. Use <ol><li>…</li></ol> for step-by-step instructions.
7. Only include what is relevant to the topic. Do not invent unnecessary sections.
8. Ensure proper HTML syntax with no invalid or unclosed tags.
9. Output should be ready to render in a Quill editor without additional formatting.

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

return response.candidates?.[0]?.content?.parts?.[0]?.text || "";
}



