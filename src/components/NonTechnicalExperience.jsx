import React from "react";
import SmartCricket from "/images/smartcricket.png"
import BFC from "/public/images/bfc.png"
import DYES from "/public/images/dyes.png"
import BB from "/public/images/bb.png"
import RCB from "/public/images/rcb.png"
import DNA from "/public/images/dna.png"


function NonTechnicalExperience() {
    const works = [
        {
            title: "Ops & CE",
            company: "SmartCricket",
            duration: "2021/22",
            logo: SmartCricket,
        },
        {
            title: "FE & E",
            company: "Bengaluru FC",
            duration: "2019/21",
            logo: BFC,
        },
        {
            title: "Accreditation & Ops",
            company: "DYES",
            duration: "Contract",
            logo: DYES,
        },
        {
            title: "Sponsorship",
            company: "Bengaluru Bulls",
            duration: "2019",
            logo: BB,
        },
        {
            title: "Senior OEM",
            company: "Royal Challengers",
            duration: "2018",
            logo: RCB,
        },
        {
            title: "Venue Ops Intern",
            company: "DNA",
            duration: "2017/18",
            logo: DNA,
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
                        Non-Technical Experience
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

                                {/* <div className="flex items-center "> */}
                                <div className="w-[20%]">
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
                            {
                                index < works.length - 1 && (
                                    <hr style={{ borderTop: "1px solid rgb(35, 38, 39)" }} />
                                )
                            }
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default NonTechnicalExperience;
