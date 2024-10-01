import "../styles/about.css";
import { Reveal } from "./reveal";

export default function About() {
  const socials = [
    {
      link: "https://www.linkedin.com/in/kevin-duong-/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
          ></path>
        </svg>
      ),
    },
    {
      link: "https://github.com/Kevin-D23",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
          ></path>
        </svg>
      ),
    },
    {
      link: "https://www.instagram.com/kevinxduongg/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
          ></path>
        </svg>
      ),
    },
    {
      link: "mailto:kevinduong111@gmail.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
          ></path>
        </svg>
      ),
    },
  ];
  return (
    <section className="about" id="about">
      <div className="header-container">
        <div className="header-line"></div>
        <h3>
          <Reveal>
            <div>
              About<span className="accent">.</span>
            </div>
          </Reveal>
        </h3>
      </div>
      <div className="about-content">
        <div className="about-description">
          <Reveal>
            <p className="highlight-first">
              Hey, I'm Kevin! I’m a front-end software engineer passionate about
              crafting beautiful and functional websites and web applications.
              As a fourth-year computer science student at UCLA, I've had the
              opportunity to hone my skills, exploring the endless possibilities
              of web technologies and creating user-centered designs.
            </p>
          </Reveal>
          <Reveal>
            <p>
              What started as a hobby turned into something much more as I
              discovered the satisfaction of turning ideas into interactive
              experiences. I love diving deep into code, exploring the latest
              tools and technologies to bring a touch of magic to the web.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Outside of coding, you’ll often find me at the gym, honing my
              photography skills, or enjoying a new video game. I also love
              exploring different restaurants and cafes, and spending quality
              time with family and friends fuels my creativity.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Feel free to browse through my projects, and let’s create
              something amazing together!
            </p>
          </Reveal>
          <Reveal>
            <div className="links-container">
              <h5>
                My links
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1.1rem"
                  width="1.1rem"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
                </svg>
              </h5>
              <div className="links">
                {socials.map((social, index) => {
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {social.icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
        <div className="tech-container">
          <Reveal>
            <div className="tech-section">
              <h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 24 24"
                  className="accent"
                >
                  <path
                    fill="currentColor"
                    d="M10.41 7.41L15 12l-4.59 4.6L9 15.18L12.18 12L9 8.82M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                  ></path>
                </svg>
                Languages
              </h4>
              <div className="tech-list">
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>C++</span>
                <span>C</span>
                <span>Python</span>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="tech-section">
              <h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 24 24"
                  className="accent"
                >
                  <path
                    fill="currentColor"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2zm-8 14h2v-3.27l2.83 1.63l1-1.73L14 12l2.83-1.64l-1-1.73L13 10.27V7h-2v3.27L8.17 8.63l-1 1.73L10 12l-2.83 1.63l1 1.73L11 13.73z"
                  ></path>
                </svg>
                Technologies
              </h4>
              <div className="tech-list">
                <span>HTML</span>
                <span>CSS</span>
                <span>Node.js</span>
                <span>React</span>
                <span>Next.js</span>
                <span>Git</span>
                <span>Tailwind</span>
                <span>Figma</span>
                <span>MongoDB</span>
                <span>Heroku</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
