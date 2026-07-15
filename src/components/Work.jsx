import React from "react";
import Xpertzy from "../assets/images/webp/xpertzy.webp";
import DDIA from "../assets/images/webp/ddia-admin.webp";
import C3iArena from "../assets/images/webp/c3i-arena.webp";
import Ausa from "../assets/images/webp/ausa.webp";

import { RxArrowTopRight } from "react-icons/rx";

function Work() {
  return (
    <div className="justify-centerbg-[#e9e9e9] container relative mx-auto flex w-[100vw] flex-col items-center text-black  dark:bg-[#09090b] dark:text-white">
      <h1
        className="title my-12"
        style={{
          fontFamily: "tth",
          fontSize: "6vw",
          letterSpacing: "-3px",
        }}>
        Selected Work
      </h1>

      <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2">
        <a href="https://securityid.iitk.ac.in/auth" target="_blank">
          <div
            id="ddia-container"
            className="flex cursor-pointer flex-col items-start hover:scale-95"
            style={{ transitionDuration: "0.1s" }}>
            <img
              className="rounded-2xl hover:scale-95"
              style={{ transitionDuration: "0.1s" }}
              src={DDIA}
              alt="ddia"
            />
            <div className="my-2 flex w-full items-center justify-between px-2">
              <h1 className="" style={{ fontFamily: "PolySans" }}>
                DDIA Security Dashboard, 2025-26
              </h1>
              <div id="ddia-arrow">
                <div className="flex items-center">
                  <h1 className="inline" style={{ fontFamily: "PolySans" }}>
                    View
                  </h1>
                  <RxArrowTopRight className="mx-2 " />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="https://xpertzy.in/" target="_blank">
          <div
            id="xpertzy-container"
            className="flex cursor-pointer flex-col items-start hover:scale-95"
            style={{ transitionDuration: "0.1s" }}>
            <img
              className="rounded-2xl hover:scale-95"
              style={{ transitionDuration: "0.1s", height: "499" }}
              src={Xpertzy}
              alt="xpertzy"
            />
            <div className="my-2 flex w-full items-center justify-between px-2">
              <h1 className="" style={{ fontFamily: "PolySans" }}>
                Xpertzy, 2025-26
              </h1>
              <div id="xpertzy-arrow">
                <div className="flex items-center">
                  <h1 className="inline" style={{ fontFamily: "PolySans" }}>
                    View
                  </h1>
                  <RxArrowTopRight className="mx-2 " />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="https://github.com/subramanyaraju1112/Qoruz" target="_blank">
          <div
            id="c3iarena-container"
            className="flex cursor-pointer flex-col items-start hover:scale-95"
            style={{ transitionDuration: "0.1s" }}>
            <img
              className="rounded-2xl "
              style={{ transitionDuration: "0.1s" }}
              src={C3iArena}
              alt="c3iarena"
            />
            <div className="my-2 flex w-full items-center justify-between px-2">
              <h1 className="" style={{ fontFamily: "PolySans" }}>
                C3i Arena, 2025
              </h1>
              <div id="c3i-arrow">
                <div className="flex items-center">
                  <h1 className="inline" style={{ fontFamily: "PolySans" }}>
                    View
                  </h1>
                  <RxArrowTopRight className="mx-2 " />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="https://doctor.ausa.health/" target="_blank">
          <div
            className="flex cursor-pointer flex-col items-start hover:scale-95"
            id="ausa-container"
            style={{ transitionDuration: "0.1s" }}>
            <img
              className="rounded-2xl hover:scale-95"
              style={{ transitionDuration: "0.1s" }}
              src={Ausa}
              alt="ausa"
            />
            <div className="my-2 flex w-full items-center justify-between px-2">
              <h1 className="" style={{ fontFamily: "PolySans" }}>
                AUSA Health, 2024
              </h1>
              <div id="ausa-arrow">
                <div className="flex items-center">
                  <h1 className="inline" style={{ fontFamily: "PolySans" }}>
                    View
                  </h1>
                  <RxArrowTopRight className="mx-2 " />
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Work;
