import { Reveal } from "./reveal";
import "../styles/experience.css";

export default function Experience() {
  const experiences = [
    {
      name: "ACM at UCLA",
      start: "Dec 2024",
      end: "Present",
      role: "Full-Stack Developer",
      location: "Los Angeles, CA",
      description:
        "Developing and maintaining web applications for over 500+ ACM members across 9 committees, delivering high-performance and scalable solutions.",
      tech: ["React", "TypeScript", "Next.js", "Express", "Docker", "HTML", "CSS",],
    },
    {
      name: "MyOxytocin",
      start: "Oct 2024",
      end: "Dec 2024",
      role: "Front-End Developer",
      location: "Los Angeles, CA",
      description:
        "Led front-end development and UI/UX design for a fully responsive e-commerce platform using Vue.js, ensuring a seamless shopping experience across devices while optimizing for search engine visibility.",
      tech: ["Vue", "JavaScript", "HTML", "CSS", "Figma"],
    },
    {
      name: "Champions Cleaning Solutions",
      start: "Aug 2024",
      end: "Oct 2024",
      role: "Front-End Developer",
      location: "Yuba City, CA",
      description:
        "Designed and developed both the front-end and back-end of a commercial cleaning business website, ensuring a seamless user experience and efficient backend functionality.",
      tech: ["React", "TypeScript", "Next.js", "HTML", "CSS", "Figma"],
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
      {experiences.map((experience, index) => {
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
                {experience.tech.map((tech, index) => {
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
