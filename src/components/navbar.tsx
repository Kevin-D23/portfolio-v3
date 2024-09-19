import "../styles/navbar.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  window.onload = init;

  const [currentSection, setCurrentSection] = useState<number>(0);
  let sectionPositions: (number | undefined)[] = [];

  function init() {
    sectionPositions = [
      document.getElementById("home")?.offsetTop,
      document.getElementById("about")?.offsetTop,
      document.getElementById("projects")?.offsetTop,
      document.getElementById("experience")?.offsetTop,
      document.getElementById("contact")?.offsetTop,
    ];
  }
  useEffect(() => {
    init();
    // eslint-disable-next-line
  }, [setCurrentSection]);

  window.addEventListener("scroll", checkCurrentSection);

  function checkCurrentSection() {
    const position = window.scrollY + 600;
    if (
      sectionPositions[0] !== undefined &&
      sectionPositions[1] !== undefined &&
      position >= sectionPositions[0] &&
      position < sectionPositions[1]
    )
      setCurrentSection(0);
    else if (
      sectionPositions[1] !== undefined &&
      sectionPositions[2] !== undefined &&
      position >= sectionPositions[1] &&
      position < sectionPositions[2]
    )
      setCurrentSection(1);
    else if (
      sectionPositions[2] !== undefined &&
      sectionPositions[3] !== undefined &&
      position >= sectionPositions[2] &&
      position < sectionPositions[3]
    )
      setCurrentSection(2);
    else if (
      sectionPositions[3] !== undefined &&
      sectionPositions[4] !== undefined &&
      position >= sectionPositions[3] &&
      position < sectionPositions[4]
    )
      setCurrentSection(3);
    else if (
      sectionPositions[4] !== undefined &&
      position >= sectionPositions[4]
    )
      setCurrentSection(4);
  }
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, staggerChildren: 1 }}
    >
      <a href="#home" className="logo">
        K<span>.</span>
      </a>

      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.li
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 0.5, x: 0 },
          }}
          transition={{ duration: 0.6 }}
          className={currentSection === 1 ? "active" : ""}
        >
          <a href="#about">About</a>
        </motion.li>
        <motion.li
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 0.5, x: 0 },
          }}
          transition={{ duration: 0.6 }}
          className={currentSection === 2 ? "active" : ""}
        >
          <a href="#projects">Projects</a>
        </motion.li>
        <motion.li
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 0.5, x: 0 },
          }}
          transition={{ duration: 0.6 }}
          className={currentSection === 3 ? "active" : ""}
        >
          <a href="#experience">Exp.</a>
        </motion.li>
        <motion.li
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 0.5, x: 0 },
          }}
          transition={{ duration: 0.6 }}
          className={currentSection === 4 ? "active" : ""}
        >
          <a href="#contact">Contact</a>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}
