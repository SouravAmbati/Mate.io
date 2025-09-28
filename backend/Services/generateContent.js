import dotenv from "dotenv";
dotenv.config();
import { GoogleGenAI } from "@google/genai";


const key = process.env.GEMINI_API_KEY ;
if (!key) throw new Error("GEMINI_API_KEY is missing or empty!");

const ai = new GoogleGenAI({ apiKey: key });

export async function generateNote(topic) {
  try {
    const prompt = `
Generate notes about the topic: "${topic}" in clean, valid HTML.

Rules:
1. Only include content that is relevant to the topic.
2. Use <h2> for main topic title, <h3> for subheadings.
3. Use <p> for paragraphs. Do not leave paragraphs empty.
4. Use <ul><li>…</li></ul> for bullet points if they exist.
5. Use <ol><li>…</li></ol> for steps if they exist.
6. Only generate valid, fully closed HTML tags.
7. Do NOT include empty sections, placeholders, or Markdown.
8. Output should be directly renderable in a Quill editor.
9. Include code examples using <pre><code>…</code></pre> if needed.
10. Avoid unnecessary line breaks outside of tags.

Topic: ${topic}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const html = response.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";

    if (!html) {
      return { success: false, message: "AI returned empty content" };
    }

    return { success: true, data: html };
  } catch (err) {
    return { success: false, message: err.message || "Failed to generate notes" };
  }








//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: prompt,
//   });

//  return response.candidates?.[0]?.content?.parts?.[0]?.text || "";

const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  });

  return response.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";
}



