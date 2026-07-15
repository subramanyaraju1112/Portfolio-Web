import React from "react";
import C3ihub from "../assets/images/png/c3ihub.png"
import PrarLabs from "../assets/images/png/prar-labs.png"
import Zethic from "../assets/images/png/zethic.png"
import Placibo from "../assets/images/png/placibo.png"


function TechnicalExperience() {
  const works = [
    {
      title: "SDE",
      company: "C3i, IIT Kanpur",
      duration: "2024-Present",
      logo: C3ihub,
    },
    {
      title: "Software Engineer",
      company: "Prar Labs",
      duration: "2023-24",
      logo: PrarLabs,
    },
    {
      title: "Frontend Developer",
      company: "Zethic LLP",
      duration: "2022-23",
      logo: Zethic,
    },
    {
      title: "Frontend Developer",
      company: "Placibo",
      duration: "Contract",
      logo: Placibo,
    },
  ];
  return (
    <div className="container relative mx-auto flex h-[100vh] w-[100vw] flex-col justify-center bg-[#e9e9e9] dark:bg-[#09090b]  text-black dark:text-white">
      <div className="flex items-center justify-center w-full" style={{}}>
        <div className="flex flex-col w-full">
          <h1
            className="my-12 title"
            style={{
              fontFamily: "tth",
              fontSize: "6vw",
              letterSpacing: "-3px",
            }}>
           Technical Experience
          </h1>
          {works.map((work, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center justify-between w-full my-8">
                <div className="flex items-center">
                  <img
                    src={work.logo}
                    className="inline rounded me-4 experience-logo"
                    style={{ height: "64px", width: "64px" }}
                    alt={work.company}
                  />
                  <h1 className="experience-text" style={{ fontFamily: "PolySans", fontSize: "1.5vw", textAlign: "start" }}>
                    {work.company} - {work.title}
                  </h1>
                </div>
                <div className="">
                  <h1 className="experience-text"
                    style={{
                      fontFamily: "PolySans",
                      fontSize: "1.5vw",
                      color: "gray",
                      textAlign: "end",
                    }}>
                    {work.duration}
                  </h1>
                </div>
              </div>
              {index < works.length - 1 && (
                <hr style={{ borderTop: "1px solid rgb(35, 38, 39)" }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechnicalExperience;
