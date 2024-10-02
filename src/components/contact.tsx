import "../styles/contact.css";
import { Reveal } from "./reveal";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-info-container">
        <Reveal width="100%">
          <h1 className="contact-header">
            Contact<span className="accent">.</span>
          </h1>
        </Reveal>
        <Reveal width="100%">
          <p className="contact-description">
            Shoot me an email if you want to connect! You can also find me on{" "}
            <span>
              <a
                className="accent"
                href="https://www.linkedin.com/in/kevin-duong-/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </span>
          </p>
        </Reveal>
        <Reveal width="100%">
          <a
            href="mailto:kevinduong111@gmail.com"
            className="contact-email-container"
          >
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
            kevinduong111@gmail.com
          </a>
        </Reveal>
      </div>
    </section>
  );
}
