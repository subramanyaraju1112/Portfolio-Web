import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiRedis,
  SiMongodb,
  SiAmazonaws,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiTailwindcss,
  SiReactquery,
  SiNginx
} from "react-icons/si";

const skills = [
  { name: "React Js", logo: SiReact, color: "#61DAFB" },
  {
    name: "Next Js",
    logo: SiNextdotjs,
    className: "text-black dark:text-white",
  },
  { name: "Tailwind CSS", logo: SiTailwindcss, color: "#06B6D4" },
  { name: "TypeScript", logo: SiTypescript, color: "#3178C6" },
  { name: "Redux", logo: SiRedux, color: "#764ABC" },
  { name: "TanStack", logo: SiReactquery, color: "#FF4154" },
  { name: "Node Js", logo: SiNodedotjs, color: "#339933" },
  {
    name: "Express Js",
    logo: SiExpress,
    className: "text-black dark:text-white",
  },
  { name: "Redis", logo: SiRedis, color: "#DC382D" },
  { name: "Mongo DB", logo: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", logo: SiPostgresql, color: "#4169E1" },
  { name: "Git", logo: SiGit, color: "#F05032" },
  { name: "Docker", logo: SiDocker, color: "#2496ED" },
  { name: "Nginx", logo: SiNginx, color: "#009639" },
  { name: "AWS", logo: SiAmazonaws, color: "#FF9900" },
];

function Skills() {
  return (
    <div className="container relative mx-auto flex min-h-[100vh] w-[100vw] flex-col justify-center bg-[#e9e9e9] px-4 py-16 text-black dark:bg-[#09090b] dark:text-white">
      <h1
        className="title my-12"
        style={{
          fontFamily: "tth",
          fontSize: "6vw",
          letterSpacing: "-3px",
        }}>
        Skills
      </h1>

      <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="skill-card group flex flex-col items-center justify-center gap-4 rounded-2xl border border-zinc-300/50 bg-[#f6f6ee] p-6 transition-all duration-200 hover:scale-95 hover:border-zinc-400 dark:border-zinc-700/50 dark:bg-[#161617] dark:hover:border-zinc-500">
            <skill.logo
              className={`h-16 w-16 ${skill.className || ""}`}
              style={skill.color ? { color: skill.color } : undefined}
            />

            <h2
              className="text-center"
              style={{
                fontFamily: "PolySans",
                fontSize: "clamp(0.95rem, 1.1vw, 1.1vw)",
              }}>
              {skill.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
