import { createCipheriv, createDecipheriv } from "crypto";

const key = Buffer.from(process.env.ENCRYPTION_KEY);
const iv = Buffer.from(process.env.IV);

function encrypt(text) {
  const cipher = createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}


function decrypt(encryptedText) {
  const decipher = createDecipheriv("aes-256-cbc", key, iv);
  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

export {encrypt,decrypt}