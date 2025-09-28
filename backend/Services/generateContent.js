import dotenv from "dotenv";
dotenv.config();
import { GoogleGenAI } from "@google/genai";


const key = process.env.GEMINI_API_KEY ;
if (!key) throw new Error("GEMINI_API_KEY is missing or empty!");

const ai = new GoogleGenAI({ apiKey: key });

export async function generateNote(topic) {
  const prompt = `
You are a helpful note generator. Generate notes about: ${topic} no markdown

Follow these rules:
1. The main topic title goes inside <h2>.
3. If you do not have content for a section, write at least 2 placeholder points inside <ul> for lists, or "No data available" inside <p> for paragraphs.
4. Normal descriptions go inside <p>.
5. Bullet points must be inside <ul><li>…</li></ul>.
6. Step-by-step instructions must be inside <ol><li>…</li></ol>.
7. Never leave a section blank.
8. Always output proper HTML, no invalid tags.

Template for AI to follow:

<h2>${topic}</h2>

<h3>Definition</h3>
<p>Provide definition here...</p>

<ul>
  <li>Point 1</li>
  <li>Point 2</li>
</ul>

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



