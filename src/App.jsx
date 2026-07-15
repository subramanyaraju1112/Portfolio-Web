import { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import TechnicalExperience from "./components/TechnicalExperience";
import Connect from "./components/Connect";
import { gsap } from "gsap";

function App() {
  useEffect(() => {
    function startLoader() {
      let counter = document.querySelector(".counter");
      let current = 0;

      function updateCounter() {
        current += Math.floor(Math.random() * 10) + 1;
        if (current >= 100) {
          current = 100;
          return;
        }
        counter.innerHTML = current + "%";
        let delay = 55;
        setTimeout(updateCounter, delay);
      }

      updateCounter();
    }

    startLoader();

    gsap.to(".counter", 0.25, {
      delay: 2,
      opacity: 0,
    });
    gsap.to(".counter-1", 0.25, {
      delay: 2,
      opacity: 0,
    });

    gsap.to(".bar", 1, {
      delay: 2.5,
      height: 0,
      stagger: {
        amount: 0.4,
      },
      ease: "power4.inOut",
      onComplete: () => {
        document.querySelector(".overlay").style.display = "none";
        document.querySelector(".counter").style.display = "none";
        document.querySelector(".counter-1").style.display = "none";
        document.querySelector(".bar").style.display = "none";
      },
    });
  }, []);
  return (
    <div className="w-[100vw] bg-[#e9e9e9] dark:bg-[#09090b]">
      <h1 className="counter text-[#1a1a1a] dark:text-[#bcbcc4]">0</h1>
      <h1 className="counter-1 text-[#1a1a1a] dark:text-[#bcbcc4]">
        SIT BACK. RELAX.
      </h1>
      <div className="overlay">
        <div className="bar bg-[#f6f6ee] dark:bg-[#161617]"></div>
        <div className="bar bg-[#f6f6ee] dark:bg-[#161617]"></div>
        <div className="bar bg-[#f6f6ee] dark:bg-[#161617]"></div>
        <div className="bar bg-[#f6f6ee] dark:bg-[#161617]"></div>
        <div className="bar bg-[#f6f6ee] dark:bg-[#161617]"></div>
        <div className="bar bg-[#f6f6ee] dark:bg-[#161617]"></div>
        <div className="bar bg-[#f6f6ee] dark:bg-[#161617]"></div>
        <div className="bar bg-[#f6f6ee] dark:bg-[#161617]"></div>
        <div className="bar bg-[#f6f6ee] dark:bg-[#161617]"></div>
        <div className="bar bg-[#f6f6ee] dark:bg-[#161617]"></div>
      </div>
      <Hero />
      <About />
      <Work />
      <TechnicalExperience />
      <Connect />
    </div>
  );
}

export default App;
