import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
    
  return (
    <section id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="text-md font-general uppercase md:text-[16px]">
          Welcome to Zentry
        </h2>
        <p className="mt-5 text-center text-4xl uppercase md:text-[6rem] leading-[0.8]">
          Disc<b>o</b>ver the world`s <br /> largest shared <b>a</b>dventure
        </p>

        <div className="about-subtext">
          <p className="text-black">
            The Game of Games begins - your life, now an epic MMORPG
          </p>
          <p className="text-black">
            Zentry unites every player from countless games and platforms
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
