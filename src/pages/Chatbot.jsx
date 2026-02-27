import { useState } from "react";

function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  // Your resume data (used for AI logic)
  const resumeText = `
Damian Rusek
B.S. Computer Science (Data Science Focus)

Skills:
JavaScript, React, Python, SQL, Machine Learning, Tableau, Git, Docker

Projects:
Fighting Fit – MMA Prediction (Python, MySQL, Tableau)
Bank Churn Prediction (Python, scikit-learn, Tableau)
NYC Airbnb Pricing Analysis (SQL, PostgreSQL, Tableau)

Experience:
Programming Analyst & DevOps Intern
Built pipelines using Docker, Kubernetes, and CI/CD workflows.
`;

  const sendMessage = () => {
    if (!input) return;

    // Add user message
    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const lowerInput = input.toLowerCase();
    let response = "";

    // Simple AI-style reasoning
    if (lowerInput.includes("skill")) {
      response =
        "Damian's skills include JavaScript, React, Python, SQL, Machine Learning, Tableau, Git, and Docker.";
    } 
    else if (lowerInput.includes("project")) {
      response =
        "Damian has worked on Fighting Fit (ML prediction), Bank Churn Analysis, and NYC Airbnb Data Analysis.";
    } 
    else if (lowerInput.includes("education")) {
      response =
        "Damian is pursuing a B.S. in Computer Science with a Data Science focus at Kean University.";
    } 
    else if (lowerInput.includes("experience")) {
      response =
        "He worked as a Programming Analyst & DevOps Intern, building pipelines and working with Docker and Kubernetes.";
    } 
    else if (lowerInput.includes("gpa")) {
      response =
        "Damian has a GPA of 3.66/4.0 and has been on the Dean’s List.";
    } 
    else {
      response =
        "I can answer questions about Damian's skills, projects, education, experience, or academic background.";
    }

    const botMessage = { role: "assistant", text: response };

    setMessages((prev) => [...prev, botMessage]);

    setInput("");
  };

  return (
    <div style={{ padding: "50px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>AI Resume Assistant</h1>

      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          height: "350px",
          overflowY: "auto",
          marginBottom: "20px",
          borderRadius: "8px",
          background: "#f9f9f9",
        }}
      >
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <strong>
              {msg.role === "user" ? "You: " : "AI: "}
            </strong>
            {msg.text}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about skills, projects, education..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            padding: "10px 20px",
            borderRadius: "6px",
            background: "#0f172a",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbot;