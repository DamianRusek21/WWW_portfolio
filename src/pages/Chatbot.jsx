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
    <div>
      <h1>AI Resume Assistant</h1>

      <div>
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
      />

      <button onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

export default Chatbot;