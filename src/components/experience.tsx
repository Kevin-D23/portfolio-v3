import { Reveal } from "./reveal";
import "../styles/experience.css";

export default function Experience() {
  const experiences = [
    {
      name: "Google",
      start: "2022",
      end: "Present",
      role: "Software Engineer",
      location: "Atlanta",
      description:
        "I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier.",
      tech: [
        "Angular",
        "Python",
        "GCP",
        "Git",
        "Github",
        "Java",
        "Golang",
        "K8s",
      ],
    },
    {
      name: "Google",
      start: "2022",
      end: "Present",
      role: "Software Engineer",
      location: "Atlanta",
      description:
        "I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier.",
      tech: [
        "Angular",
        "Python",
        "GCP",
        "Git",
        "Github",
        "Java",
        "Golang",
        "K8s",
      ],
    },
    {
      name: "Google",
      start: "2022",
      end: "Present",
      role: "Software Engineer",
      location: "Atlanta",
      description:
        "I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier.",
      tech: [
        "Angular",
        "Python",
        "GCP",
        "Git",
        "Github",
        "Java",
        "Golang",
        "K8s",
      ],
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
      {experiences.map((experience) => {
        return (
          <div className="job">
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
                {experience.tech.map((tech) => {
                  return <span>{tech}</span>;
                })}
              </div>
            </Reveal>
          </div>
        );
      })}
    </section>
  );
}
