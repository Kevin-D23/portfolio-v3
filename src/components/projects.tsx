import { Reveal } from "./reveal";
import kapi from "../images/kapi.jpg";
import discordBot from "../images/discordBot.webp";
import studentsInferno from "../images/studentsInferno.png";
import pong from "../images/3dpong.png"
import "../styles/projects.css";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    // eslint-disable-next-line
  }, [isInView]);
  const projects = [
    {
      name: "Kapi",
      github: "https://github.com/king-kapi/kapi-web",
      demo: "",
      tech: ["React", "TypeScript", "Tailwind", "NextJS", "MongoDB"],
      shortDescription:
        "Similar to Discord, Kapi was designed to create a welcoming space for underrepresented communities in gaming, fostering inclusive interactions and community-building within the gaming world.",
      img: kapi,
      longDescription: [
        "Collaborated closely with a team of designers to create a platform aimed at supporting and welcoming underrepresented communities in the gaming space. Inspired by the features of Discord, Kapi provides a space for real-time communication and community engagement, but with a strong emphasis on inclusivity and user experience.",
        "My role focused on implementing key user interface components that ensure seamless interaction and a welcoming environment for all users.",
        "Built using technologies like React and Next.js, the project was designed to be highly responsive and intuitive. I was responsible for developing interactive features and ensuring that the platform functioned smoothly across different devices.",
        "Working alongside a talented team, I helped translate design concepts into a vibrant, accessible, and visually engaging platform, making Kapi an exciting space for underrepresented voices in gaming to connect and thrive.",
      ],
    },
    {
      name: "Discord Bot",
      github: "https://github.com/Kevin-D23/Cool-Peeper-DSbot",
      demo: "",
      tech: ["JavaScript", "NodeJS", "MongoDB", "Heroku"],
      shortDescription:
        "Versatile Discord bot that sets reminders, plays music, and offers gambling features, enhancing server engagement with convenient scheduling, entertainment, and fun interactive activities for users.",
      img: discordBot,
      longDescription: [
        "As an active participant in the gaming space, I noticed that Discord is the go-to platform for communication among gamers. However, I felt that there was potential to make the experience even more fun and engaging.",
        "This led me to develop a custom Discord bot designed to enhance the community interaction.",
        "The bot allows users to set reminders, play music, and even engage in fun gambling games, adding a new layer of functionality to the Discord experience.",
        "By leveraging JavaScript, Node.js, and MongoDB, I created a versatile bot that brings entertainment and utility, all while seamlessly integrating into the existing Discord platform.",
      ],
    },
    {
      name: "3D Pong",
      github: "https://github.com/minruigui/cs174A-project",
      tech: ["JavaScript"],
      img: pong,
      shortDescription:
        "3D rendition of the classic game, Pong. This game features rendering techniques including texture mapping, shading, and shadow mapping.",
      longDescription: [
        "This 3D version of the game Pong was created using the 'tiny-graphics' library.",
        "Leading a team of 3, I mainly focused on the moving aspects. This included implementing cursor tracking for paddle movement, ball trajectory, and collision detection.",
        "This project was built for a UCLA computer science course, CS-174A: Intro to Computer Graphics."
      ],
    },
    {
      name: "Students Inferno",
      github: "https://github.com/Kevin-D23/CS35L-GP",
      demo: "",
      tech: ["React", "NextJS", "MongoDB Atlas", "Express", "Mongoose"],
      shortDescription:
        "Study companion app designed to help students find others to form study groups with. This platform combines the convenience of a dating app with the purpose of finding like-minded individuals.",
      img: studentsInferno,
      longDescription: [
        "'Students Inferno' was a unique group project that I helped design and develop with the goal of connecting students looking for study partners.",
        "Inspired by the mechanics of dating apps, we built a platform that allows students to find and match with peers based on shared classes, study habits, and hobbies.",
        "At the core of the platform was a custom matching algorithm designed to pair students with others who had the most similar academic and personal preferences.",
        "Next.js allowed us to optimize the app for performance while providing a smooth user experience, and MongoDB's flexibility helped us store and manage user profiles, class data, and matching criteria efficiently.",
      ],
    },
  ];

  const [displayedProject, setDisplayedProject] = useState(<></>);

  function openProject(index: number) {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
    setDisplayedProject(
      <motion.div
        className="displayed-project-container"
        onClick={() => closeProject()}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button onClick={() => closeProject()}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.5rem"
            width="1.5rem"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </button>
        <motion.div
          className="displayed-project"
          onClick={(e) => e.stopPropagation()}
        >
          <img src={projects[index].img} alt="project" />
          <div className="displayed-project-content">
            <h4>{projects[index].name}</h4>
            <div className="displayed-project-tech-container">
              {projects[index].tech.map((tech, i) => {
                return (
                  <span key={i}>
                    {tech}
                    {i !== projects[index].tech.length - 1 && " - "}
                  </span>
                );
              })}
            </div>
            <div className="displayed-project-description-container">
              {projects[index].longDescription.map((text, i) => {
                return <p>{text}</p>;
              })}
            </div>
            <div className="displayed-project-links-container">
              <h5>
                Project Links<span className="accent">.</span>
              </h5>
              {projects[index].github && projects[index].demo ? (
                <div className="displayed-project-links">
                  <a
                    href={projects[index].github}
                    target="_blank"
                    rel="noreferrer"
                  >
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
                    <span>source code</span>
                  </a>
                  <a
                    href={projects[index].demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="1.5rem"
                      width="1.5rem"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path>
                    </svg>
                    <span>live demo</span>
                  </a>
                </div>
              ) : (
                <div className="displayed-project-links">
                  <a
                    href={projects[index].github}
                    target="_blank"
                    rel="noreferrer"
                  >
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
                    <span>source code</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  function closeProject() {
    setDisplayedProject(<></>);
    document.body.style.overflow = "";
    document.body.style.height = "";
  }

  document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode === 27) {
      closeProject();
    }
  };

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="header-container">
        <h3>
          <Reveal width="100%">
            <div>
              Projects<span className="accent">.</span>
            </div>
          </Reveal>
        </h3>
        <div className="header-line"></div>
      </div>
      <div className="projects-container">
        {projects.map((project, index) => {
          return (
            <div className="project" key={index}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div
                  className="img-container"
                  onClick={() => openProject(index)}
                >
                  <img src={project.img} alt="project" />
                </div>
              </motion.div>
              <div className="project-info">
                <Reveal width="100%">
                  <div className="project-name">
                    <h4 onClick={() => openProject(index)}>{project.name}</h4>
                    <div className="name-line"></div>
                    {project.github && project.demo ? (
                      <div className="project-links">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.75rem"
                            height="1.75rem"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                            ></path>
                          </svg>
                        </a>
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            height="1.75rem"
                            width="1.75rem"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path>
                          </svg>
                        </a>
                      </div>
                    ) : (
                      <div className="project-links">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.75rem"
                            height="1.75rem"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </Reveal>
                <Reveal width="fit-content">
                  <div className="project-tech accent">
                    {project.tech.map((tech, index) => {
                      return (
                        <span key={index}>
                          {tech}
                          {index !== project.tech.length - 1 && " - "}
                        </span>
                      );
                    })}
                  </div>
                </Reveal>
                <Reveal width="fit-content">
                  <div className="project-description">
                    <p>
                      {project.shortDescription}{" "}
                      <span
                        className="accent"
                        onClick={() => openProject(index)}
                      >
                        Learn more &gt;
                      </span>
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          );
        })}
      </div>
      {displayedProject}
    </section>
  );
}
