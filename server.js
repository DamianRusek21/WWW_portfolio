import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import resumeData from "./resumeData.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are Damian's professional AI Resume Assistant.
Only answer questions about Damian based on the resume below.
If a question is unrelated, politely say:
"I can only answer questions about Damian's resume."

Resume:
${resumeData}
          `
        },
        { role: "user", content: message }
      ],
    });

    res.json({
      reply: completion.choices[0].message.content,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});