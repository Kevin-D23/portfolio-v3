import { Reveal } from "./reveal";
import "../styles/experience.css";

export default function Experience() {
  const experiences = [
    {
      name: "Champions Cleaning Solutions",
      start: "2024",
      end: "Present",
      role: "Front-end Developer",
      location: "Yuba City",
      description:
        "Designed and developed both the front-end and back-end of a commercial cleaning business website, ensuring a seamless user experience and efficient backend functionality.",
      tech: ["React", "TypeScript","Next.js", "HTML", "CSS", "Figma"],
    },
  ];
  return (
    <section className="experience" id="experience">
      <div className="header-container">
        <div className="header-line"></div>
        <h3>
          <Reveal>
            <div>
              Experience<span className="accent">.</span>
            </div>
          </Reveal>
        </h3>
      </div>
      {experiences.map((experience,index) => {
        return (
          <div className="job" key={index}>
            <div className="job-name-date">
              <Reveal>
                <h3>{experience.name}</h3>
              </Reveal>
              <Reveal>
                <div className="job-date">
                  {experience.start} - {experience.end}
                </div>
              </Reveal>
            </div>
            <div className="job-role-location">
              <Reveal>
                <h4>{experience.role}</h4>
              </Reveal>
              <Reveal>
                <div className="job-location">{experience.location}</div>
              </Reveal>
            </div>
            <Reveal>
              <p className="job-description">{experience.description}</p>
            </Reveal>
            <Reveal>
              <div className="job-tech">
                {experience.tech.map((tech,index) => {
                  return <span key={index}>{tech}</span>;
                })}
              </div>
            </Reveal>
          </div>
        );
      })}
    </section>
  );
}
