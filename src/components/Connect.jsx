import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFilePdf } from "react-icons/fa";

function Connect() {

  return (
    <div className="connect-wrapper-main container relative mx-auto flex h-[100vh]  flex-col bg-[#e9e9e9] dark:bg-[#09090b]  text-black dark:text-white">
      <div className="flex items-center justify-center overflow-hidden text-center spacer h-1/3">
        <h1
          className=""
          id="scrollingText"
          style={{
            fontFamily: "Generator Bold",
            fontSize: "5vw",
            letterSpacing: "-1px",
          }}>
          There’s no place like <span className="text-[#FF8080]">localhost:3000</span>,<br/> Let's build something special.
        </h1>
      </div>
      <div className="h-1/3">
        <h1
          className="italic connect-text-main text-[#08dc90] dark:text-[#93ffcc] "
          style={{
            fontFamily: "Generator Bold",
            fontSize: "4vw",
            letterSpacing: "-1px",
          }}>
          I would love to change the world, but they won’t give me the source code.
        </h1>
      </div>
      <div className="flex flex-col items-end justify-around w-full h-1/3">
        <h1
          className="hover:underline flex gap-2 items-center connect-text-mail"
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
          <div className="flex justify-around w-1/2 social-wrapper">
            <h1
              className="hover:underline flex gap-2 items-center"
              style={{
                fontFamily: "Generator Bold",
                fontSize: "2vw",
                letterSpacing: "-1px",
                cursor: "pointer",
              }}>
              <FaXTwitter />
              <a target="_blank" href="https://x.com/subramanya1112?t=ucms6E8zD_vdGXK3Acp7DA&s=09">
                twitter ( X )
              </a>
            </h1>
            <h1
              className="hover:underline flex gap-2 items-center"
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
          </div>
          <div className="flex justify-around w-1/2 social-wrapper">
            <h1
              className="hover:underline flex gap-2 items-center"
              style={{
                fontFamily: "Generator Bold",
                fontSize: "2vw",
                letterSpacing: "-1px",
                cursor: "pointer",
              }}>
              <FaLinkedin />
              <a href="https://www.linkedin.com/in/subramanya-raju-s-a0a143157/" target="_blank">
                linkedin
              </a>
            </h1>
            <h1
              className="hover:underline flex gap-2 items-center"
              style={{
                fontFamily: "Generator Bold",
                fontSize: "2vw",
                letterSpacing: "-1px",
                cursor: "pointer",
              }}>
              <FaFilePdf />
              <a
                href="https://drive.google.com/file/d/1wvxBW3FOz1wqeh46trCUFIYGwGqcahI9/view?usp=sharing"
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
