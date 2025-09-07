import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

// LeftBanner component with typewriter effect and media integration
const LeftBanner = () => {
    const [text] = useTypewriter({
      words: [
        "Professional Coder.",
        "Full Stack Developer.",
        "UI Designer.",
        "Web Developer.",
        "Software Engineer.",
        "React Developer.",
        "Frontend Developer.",
        "Backend Developer.",
        "Tech Enthusiast.",
        "Creative Coder.",
        "Digital Thinker.",
      ],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 50,
      delaySpeed: 2000,
    });

    // Render the component
    // This component displays a welcome message, a typewriter effect for the title,
    // a brief introduction, and a media component.
    return (
      <div className="w-full lgl:w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h4 className=" text-lg font-normal">WELCOME TO MY SITE</h4>
          <h1 className="text-6xl font-bold text-white">
            Hi, I'm{" "}
            <span className="text-designColor capitalize">Shehzad Ali</span>
          </h1>
          <h2 className="text-4xl font-bold text-pink">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|*"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
  I focus on turning concepts into engaging digital journeys. Through smooth interactions and thoughtful design, 
  I craft interfaces that connect with users naturally. Each project gives me the chance to merge innovation with solid development, 
  making sure the experiences are both enjoyable and reliable.
          </p>
        </div>
        <Media />
      </div>
    );
}

export default LeftBanner