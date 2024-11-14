import "../styles/home.css";
import anime from "animejs";
import { useState, useEffect } from "react";
import { motion, useTransform } from "framer-motion";

import { Reveal } from "./reveal";

export default function Home({ scrollYProgress }: any) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const speed = 100;

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect((): any => {
    let timeout: any;
    let words = ["Front-End Developer", "Software Engineer", "Web Developer"];

    const currentWord = words[currentWordIndex];
    if (!isDeleting) {
      // Typing effect
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, speed);
      } else {
        // Pause at the end of the word before starting to delete
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
      }
    } else {
      // Backspace effect
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        }, speed / 2); // Speed up backspacing
      } else {
        // Move to the next word after backspacing
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex, speed]);

  const handleClick = (e: any) => {
    anime({
      targets: ".dot",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duaration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        {
          value: 0.35,
          easing: "easeInOutQuad",
          duration: 500,
        },
      ],
      delay: anime.stagger(100, {
        grid: [numCols, numRows],
        from: e.target.dataset.index,
      }),
    });
  };

  const numCols = 25;
  const numRows = 25;
  const dots = [];
  let index = 0;

  useEffect(() => {
    let lastExecutionTime = 0;

    const handleScroll = () => {
      const currentTime = new Date().getTime();
      
      // Only proceed if the last execution was more than the scroll delay ago
      if (currentTime - lastExecutionTime > 800) {
        const bottomRightDot = document.querySelector(
          `.dot-wrapper[data-index="${numCols * numRows - 1}"]`
        );

        if (bottomRightDot) {
          handleClick({ target: bottomRightDot });
        }

        // Update the last execution time
        lastExecutionTime = currentTime;
      }
    };

    // Only add the scroll listener if the screen width is larger than 768px
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", handleScroll);
    }

    // Clean up the scroll listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  for (let i = 0; i < numCols; i++) {
    for (let j = 0; j < numRows; j++) {
      dots.push(
        <div
          className="dot-wrapper"
          onClick={handleClick}
          data-index={index}
          key={`${i} -${j}`}
        >
          <div className="dot" data-index={index} />
        </div>
      );
      index++;
    }
  }

  return (
    <motion.section style={{ scale, opacity }} className="home" id="home">
      <div className="text-container">
        <Reveal>
          <h1>
            Hey, I'm Kevin<span className="accent">.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2>
            I'm a <span className="accent">{displayedText}</span>
          </h2>
        </Reveal>

        <Reveal>
          <p>
            I specialize in front-end development, focusing on creating
            engaging, intuitive, and visually stunning web experiences. My goal
            is to deliver digital solutions that not only look great but also
            function flawlessly across all platforms, ensuring an exceptional
            user experience every time 🎨 Let's connect!
          </p>
        </Reveal>
        <Reveal>
          <a href="#contact">Contact me</a>
        </Reveal>
      </div>
      <div
        className="grid-container"
        style={{ gridTemplateColumns: `repeat(${numCols}, 1fr)` }}
      >
        {dots}
      </div>
    </motion.section>
  );
}
