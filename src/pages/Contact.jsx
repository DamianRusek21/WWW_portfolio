function Contact() {
  return (
    <div style={{ padding: "60px", display: "flex", justifyContent: "center" }}>
      <div
        style={{
          background: "#1e1e1e",
          padding: "40px",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "600px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
        }}
      >
        <h2 style={{ marginBottom: "30px", color: "white" }}>
          Contact Me
        </h2>

        <p style={{ color: "#ccc" }}>
          <strong>Email:</strong> drusek20@gmail.com
        </p>

        <p style={{ color: "#ccc" }}>
          <strong>Phone:</strong> (732)-318-8722
        </p>

        <div style={{ marginTop: "30px", display: "flex", gap: "15px", flexWrap: "wrap" }}>
          
          <a
            href="mailto:drusek20@gmail.com"
            style={buttonStyle}
          >
            Email Me
          </a>

          <a
            href="https://linkedin.com/in/damian-rusek-3a04482a6/"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/DamianRusek21"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
          >
            GitHub
          </a>

        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "12px 20px",
  backgroundColor: "#646cff",
  color: "white",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  transition: "0.3s",
};

export default Contact;