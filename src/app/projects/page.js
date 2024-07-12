import NavBar from "../components/server/NavBar";
import LinkSection from "../components/server/LinkSection";
import InitialLoadingProjects from "../components/client/InitialLoadingProjects";
import WhatDoIDo from "../components/server/WhatDoIDo";
import Image from "next/image";

async function page() {
  return (
    <>
      <NavBar />
      <WhatDoIDo />
      <section
        className="h-[100dvh] w-full overflow-hidden absolute flex items-end bg-cover pr-20"
        style={{
          backgroundImage: "url('/images/backgrounds/orange-black.webp')",
          backgroundPosition: "center",
        }}
      >
        <div className="flex w-full justify-center items-start">
          <div className="w-3/5 overflow-hidden flex justify-center p-10">
            <div className="">
              <Image
                width={1920}
                height={1080}
                className="w-full h-auto rounded-2xl"
                src="/images/projects/swasau.webp"
              />
            </div>
          </div>
          <div className="w-2/5 flex text-end flex-col">
            <div
              className="font-light text-2xl w-full border-b-4 border-orange-500  xss:text-2xl sm:text-3xl lg:text-5xl flex gap-2 text-slate-200"
              style={{
                fontFamily: "android",
              }}
            >
              <h1 className="select-none w-full  text-right slideRight">
                Projects
              </h1>
            </div>
            <div
              className="flex flex-col text-slate-400 max-h-[50dvh] overflow-y-scroll"
              style={{
                fontFamily: "bebas",
              }}
              id="projectSection"
            >
              <div className="font-light text-2xl w-full border-b-2 border-white transition-all duration-300 hover:scale-125 xss:text-2xl sm:text-3xl lg:text-4xl flex gap-2 ">
                <h1 className="select-none w-full  text-right">
                  REAL-TIME WEATHER MONITORING & DISPLAY
                </h1>
              </div>
              <div className="font-light text-2xl w-full border-b-2 border-white transition-all duration-300 hover:scale-125 xss:text-2xl sm:text-3xl lg:text-4xl flex gap-2 ">
                <h1 className="select-none w-full  text-right">
                  GTU INNOVATION COUNCIL
                </h1>
              </div>
              <div className="font-light text-2xl w-full border-b-2 border-white transition-all duration-300 hover:scale-125 xss:text-2xl sm:text-3xl lg:text-4xl flex gap-2 ">
                <h1 className="select-none w-full  text-right">SMARTROLL</h1>
              </div>
              <div className="font-light text-2xl w-full border-b-2 border-white  transition-all duration-300 hover:scale-125 xss:text-2xl sm:text-3xl lg:text-4xl flex gap-2 ">
                <h1 className="select-none w-full  text-right">
                  PORTFOLIO SITE FOR SWASAU TECHNOLOGY
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LinkSection />
      <InitialLoadingProjects />
    </>
  );
}

export default page;
