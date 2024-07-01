import React from "react";
import Ausa from "../../public/images/webp/ausa-web.webp";
import Dimaak from "../../public/images/webp/dimaak-web.webp";
import Qoruz from "../../public/images/webp/qoruz-web.webp";
import Netflix from "../../public//images/webp/netflix-web.webp";
import { RxArrowTopRight } from "react-icons/rx";

function Work() {
  return (
    <div className="container relative mx-auto flex w-[100vw] flex-col items-center justify-centerbg-[#e9e9e9] dark:bg-[#09090b]  text-black dark:text-white">
      <h1
        className="my-12 title"
        style={{
          fontFamily: "tth",
          fontSize: "6vw", letterSpacing: "-3px"
        }}>
        Selected Work
      </h1>

      <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2">
        <a href="https://doctor.ausa.health/" target="_blank">
          <div
            className="flex flex-col items-start cursor-pointer hover:scale-95"
            id="ausa-container"
            style={{ transitionDuration: "0.1s" }}>
            <img
              className="rounded-2xl hover:scale-95"
              style={{ transitionDuration: "0.1s" }}
              src={Ausa}
              alt="ausa"
            />
            <div className="flex items-center justify-between w-full px-2 my-2">
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
        <a href="https://github.com/subramanyaraju1112/Dimaak" target="_blank">
          <div
            id="dimaak-container"
            className="flex flex-col items-start cursor-pointer hover:scale-95"
            style={{ transitionDuration: "0.1s" }}>
            <img
              className="rounded-2xl hover:scale-95"
              style={{ transitionDuration: "0.1s" }}
              src={Dimaak}
              alt="dimaak"
            />
            <div className="flex items-center justify-between w-full px-2 my-2">
              <h1 className="" style={{ fontFamily: "PolySans" }}>
                Dimaak, 2023
              </h1>
              <div id="dimaak-arrow">
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
            id="qoruz-container"
            className="flex flex-col items-start cursor-pointer hover:scale-95"
            style={{ transitionDuration: "0.1s" }}>
            <img
              className="rounded-2xl "
              style={{ transitionDuration: "0.1s" }}
              src={Qoruz}
              alt="qoruz"
            />
            <div className="flex items-center justify-between w-full px-2 my-2">
              <h1 className="" style={{ fontFamily: "PolySans" }}>
                Qoruz, 2023
              </h1>
              <div id="qoruz-arrow">
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
        <a href="https://github.com/subramanyaraju1112/netflix-replica-react" target="_blank">
          <div
            id="netflix-container"
            className="flex flex-col items-start cursor-pointer hover:scale-95"
            style={{ transitionDuration: "0.1s" }}>
            <img
              className="rounded-2xl hover:scale-95"
              style={{ transitionDuration: "0.1s" }}
              src={Netflix}
              alt="netflix-replica"
            />
            <div className="flex items-center justify-between w-full px-2 my-2">
              <h1 className="" style={{ fontFamily: "PolySans" }}>
                Netflix Replica, 2023
              </h1>
              <div id="netflix-arrow">
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
