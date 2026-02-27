import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ reply: "Method not allowed" });
  }

  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("Missing OPENAI_API_KEY in environment variables");
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const { message } = req.body;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are an AI resume assistant for Damian Rusek.

Use ONLY the resume information below to answer questions.
Be accurate, professional, and concise.

If the answer is not in the resume, say:
"The resume does not contain this information."

Resume Information:

EDUCATION:
Kean University — B.S. Computer Science (Data Science focus)
GPA: 3.66/4.0
Dean’s List
Phi Kappa Phi Honor Society

PROJECTS:
Fighting Fit (Python, MySQL, Tableau)
Bank Churn Prediction (Python, scikit-learn, Tableau)
NYC Airbnb Analysis (SQL, PostgreSQL, Tableau)

EXPERIENCE:
Programming Analyst & DevOps Intern
Docker, Kubernetes, CI/CD pipelines

TECHNICAL SKILLS:
Python, SQL, Java, Pandas
Machine Learning, Data Analysis
Tableau, PowerBI, Excel
Git, Docker
`
        },
        { role: "user", content: message }
      ],
    });

    return res.status(200).json({
      reply: completion.choices[0].message.content,
    });

  } catch (error) {
    console.error("API ERROR:", error);

    return res.status(500).json({
      reply: "Server error. Check backend configuration."
    });
  }
}