import { useState } from "react"

function Chatbot() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])

  const sendMessage = async () => {
    if (!input) return

    const userMessage = { role: "user", text: input }
    setMessages([...messages, userMessage])

    const response = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    })

    const data = await response.json()

    const botMessage = { role: "assistant", text: data.reply }
    setMessages(prev => [...prev, botMessage])

    setInput("")
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>AI Resume Assistant</h1>

      <div style={{ 
        border: "1px solid #ccc", 
        padding: "20px", 
        height: "300px", 
        overflowY: "auto",
        marginBottom: "20px"
      }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.role === "user" ? "You: " : "AI: "}</strong>
            {msg.text}
          </div>
        ))}
      </div>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "70%", padding: "10px" }}
      />
      <button onClick={sendMessage} style={{ padding: "10px" }}>
        Send
      </button>
    </div>
  )
}

export default Chatbot