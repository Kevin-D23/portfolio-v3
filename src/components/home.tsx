import "../styles/home.css";
import anime from "animejs";
import { useState, useEffect } from "react";

import { Reveal } from "./reveal";

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const speed = 100;

  useEffect((): any => {
    let timeout: any;
    let words = ["Full Stack Developer", "Software Engineer", "Web Developer"];

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
    <section className="home" id="home">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
    </section>
  );
}
