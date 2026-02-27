import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <h1>Damian Rusek</h1>

        <p className="tagline">
          Data Science • Machine Learning • DevOps Engineering
        </p>

        <p className="bio">
          Computer Science student specializing in predictive modeling,
          data engineering, and intelligent systems. I build end-to-end
          analytical solutions that transform raw data into actionable insight.
        </p>

        <div className="actions">
          <Link to="/projects" className="primary-btn">
            View Projects
          </Link>

          <Link to="/about" className="secondary-btn">
            About Me
          </Link>
        </div>
      </section>


    </div>
  );
}

export default Home;