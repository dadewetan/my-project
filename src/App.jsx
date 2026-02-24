import './App.css'

function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Daniel Adewetan</h1>
        <h2>Aspiring Software Engineer</h2>

        <p>
          I am a recent graduate learning modern web development and building projects
          with React, JavaScript, and GitHub. This website is my first deployed React
          application.
        </p>

        <div className="cta-row">
          <a
            href="https://github.com/dadewetan"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            View My GitHub
          </a>

          <a
            href="https://dadewetan.github.io/my-project/"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-outline"
          >
            Live Site
          </a>
        </div>
      </header>

      <section className="projects-section">
        <h2>Projects</h2>

        <div className="projects">
          <div className="project-card">
            <h3>React Portfolio Site</h3>
            <p>
              A personal portfolio website built with React (Vite) and deployed using
              GitHub Pages.
            </p>
            <a
              href="https://dadewetan.github.io/my-project/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Live Site →
            </a>
          </div>

          <div className="project-card">
            <h3>GitHub Repository</h3>
            <p>
              The source code for this website including commits, configuration, and
              deployment setup.
            </p>
            <a
              href="https://github.com/dadewetan/my-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code →
            </a>
          </div>

          <div className="project-card">
            <h3>Next Project</h3>
            <p>
              In progress — I’m currently working on new JavaScript/React projects and
              will add them here soon.
            </p>
            <span className="muted">Coming soon</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App