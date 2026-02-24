import './App.css'

function App() {
  return (
    <div className="container">
      <h1>Daniel Adewetan</h1>

      <h2>Aspiring Software Engineer</h2>

      <p>
        I am a recent graduate learning modern web development and building
        projects with React, JavaScript, and GitHub. This website is my first
        deployed React application.
      </p>

      <a
        href="https://github.com/dadewetan"
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        View My GitHub
      </a>

      <hr />

      <h2>Projects</h2>

      <div className="projects">
        <div className="project-card">
          <h3>React Portfolio Site</h3>
          <p>
            A personal portfolio website built with React and deployed using
            GitHub Pages.
          </p>
          <a href="https://dadewetan.github.io/my-project/" target="_blank">Live Site</a>
        </div>

        <div className="project-card">
          <h3>GitHub Repository</h3>
          <p>
            The source code for this website including commit history and
            deployment configuration.
          </p>
          <a href="https://github.com/dadewetan/my-project" target="_blank">View Code</a>
        </div>
      </div>
    </div>
  )
}

export default App