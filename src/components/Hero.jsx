import React from "react";
import { RxArrowTopRight } from "react-icons/rx";
import Switcher from "./Switcher";

function Hero() {
  return (
    <div className="container relative mx-auto flex  h-[100vh] flex-col bg-[#e9e9e9] py-12 text-black  dark:bg-[#09090b] dark:text-white ">
      <div className="flex w-full items-center justify-between">
        <Switcher />
        <div className="say-hello flex items-center">
          <a
            className="hero-sub underline underline-offset-4"
            href="mailto:subramanyaraju1112@gmail.com"
            style={{
              fontFamily: "SuisseIntl",
              fontSize: "1.5vw",
              textDecorationThickness: "1px",
              textDecorationColor: "#767068",
            }}>
            Say, hello!
          </a>
          <RxArrowTopRight className="hero-sub mx-2 text-[1.5vw]" />
        </div>
      </div>
      <div
        className="flex flex-col items-start justify-center "
        style={{ lineHeight: "12vw", flexGrow: "1" }}>
        <h1
          className="hero overflow-hidden text-[#fe7c7b] dark:text-[#ffcaca]"
          style={{
            fontFamily: "SuisseIntl",
            fontSize: "13vw",
            letterSpacing: "-3px",
          }}>
          I'm Subramanya Raju
        </h1>
        {/* <h1
          className="hero text-[#fe7c7b] dark:text-[#ffcaca] overflow-hidden"
          style={{ fontFamily: "SuisseIntl", fontSize: "13vw" }}>
          Portfolio/24
        </h1> */}
      </div>
      <div className="sub-wrapper z-10 flex h-1/4 w-full">
        <div className="flex w-1/2 flex-col justify-start">
          <h1
            className="hero-sub"
            style={{ fontFamily: "SuisseIntl", fontSize: "3vw" }}>
            Based out of Bengaluru, India
          </h1>
          <p
            className="hero-sub-1"
            style={{ fontFamily: "SuisseIntl", fontSize: "2vw" }}>
            LAST UPDATE ◆ 2026
          </p>
        </div>
        <div
          className="hero-sub-wrapper flex w-1/2 flex-col justify-start text-end"
          style={{ lineHeight: "4vw" }}>
          <h1
            className="hero-sub"
            style={{
              fontFamily: "SuisseIntl",
              fontSize: "3vw",
              letterSpacing: "-1px",
            }}>
            — MERN Stack Developer, Helping Brands Create Something EPIC!
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
