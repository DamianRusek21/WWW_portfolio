import { useState } from "react";

function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });

    const data = await response.json();

    const botMessage = { role: "assistant", text: data.reply };

    setMessages((prev) => [...prev, botMessage]);

    setInput("");
  };

  return (
    <div style={{ padding: "50px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>AI Resume Assistant</h1>

      <div style={{ marginBottom: "20px" }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.role === "user" ? "You: " : "AI: "}</strong>
            {msg.text}
          </div>
        ))}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "10px", width: "70%" }}
      />

      <button onClick={sendMessage} style={{ padding: "10px" }}>
        Send
      </button>
    </div>
  );
}

export default Chatbot;