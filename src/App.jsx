import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Chatbot from "./pages/Chatbot"
import Contact from "./pages/Contact"

function App() {
  return (
    <div>
      <nav style={{ padding: "20px", background: "#222" }}>
        <Link to="/" style={{ color: "white", margin: "10px" }}>Home</Link>
        <Link to="/about" style={{ color: "white", margin: "10px" }}>About</Link>
        <Link to="/projects" style={{ color: "white", margin: "10px" }}>Projects</Link>
        <Link to="/chatbot" style={{ color: "white", margin: "10px" }}>AI Resume Assistant</Link>
        <Link to="/contact" style={{ color: "white", margin: "10px" }}>Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App