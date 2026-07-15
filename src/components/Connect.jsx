import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFilePdf } from "react-icons/fa";

function Connect() {
  return (
    <div className="connect-wrapper-main container relative mx-auto flex h-[100vh]  flex-col bg-[#e9e9e9] text-black  dark:bg-[#09090b] dark:text-white">
      <div className="spacer flex h-1/3 items-center justify-center overflow-hidden text-center">
        <h1
          className=""
          id="scrollingText"
          style={{
            fontFamily: "Generator Bold",
            fontSize: "5vw",
            letterSpacing: "-1px",
          }}>
          There’s no place like{" "}
          <span className="text-[#FF8080]">localhost:3000</span>,<br /> Let's
          build something special.
        </h1>
      </div>
      <div className="h-1/3">
        <h1
          className="connect-text-main italic text-[#08dc90] dark:text-[#93ffcc] "
          style={{
            fontFamily: "Generator Bold",
            fontSize: "4vw",
            letterSpacing: "-1px",
          }}>
          I would love to change the world, but they won’t give me the source
          code.
        </h1>
      </div>
      <div className="flex h-1/3 w-full flex-col items-end justify-around">
        <h1
          className="connect-text-mail flex items-center gap-2 hover:underline"
          style={{
            fontFamily: "Generator Bold",
            fontSize: "4.5vw",
            letterSpacing: "-1px",
          }}>
          <a
            className="connect-text-mail"
            href="mailto:subramanyaraju1112@gmail.com">
            subramanyaraju1112@gmail.com
          </a>
        </h1>

        <div className="flex w-full">
          <div className="social-wrapper flex w-full justify-between">
            <h1
              className="flex items-center gap-2 hover:underline"
              style={{
                fontFamily: "Generator Bold",
                fontSize: "2vw",
                letterSpacing: "-1px",
                cursor: "pointer",
              }}>
              <FaGithub />
              <a href="https://github.com/subramanyaraju1112" target="_blank">
                github
              </a>
            </h1>

            <h1
              className="flex items-center gap-2 hover:underline"
              style={{
                fontFamily: "Generator Bold",
                fontSize: "2vw",
                letterSpacing: "-1px",
                cursor: "pointer",
              }}>
              <FaLinkedin />
              <a
                href="https://www.linkedin.com/in/subramanya-raju-s-a0a143157/"
                target="_blank">
                linkedin
              </a>
            </h1>
            <h1
              className="flex items-center gap-2 hover:underline"
              style={{
                fontFamily: "Generator Bold",
                fontSize: "2vw",
                letterSpacing: "-1px",
                cursor: "pointer",
              }}>
              <FaFilePdf />
              <a
                href="https://drive.google.com/file/d/1Gp6w3Zr6CV0F4WQtY8zlWEyW9P5RnAHZ/view?usp=sharing"
                target="_blank">
                cv
              </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;
