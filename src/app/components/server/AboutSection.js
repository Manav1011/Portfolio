import Link from "next/link";
import Image from "next/image";

import EventListeners from "../client/EventListeners";
async function AboutSection() {
  return (
    <div
      className="w-full absolute bottom-2 flex flex-row bottomTotop hidden"
      id="AboutSection"
    >
      <section className="w-full lg:w-1/2 text-slate-200 text-justify pl-2">
        <div
          className="font-light pr-2  text-2xl w-1/2 horizontal-line lg:w-full border-b-4 border-orange-500 text-end mb-4 lg:-top-16 xss:text-2xl sm:text-3xl lg:text-5xl flex gap-2 text-slate-200  flex-row justify-end items-center"
          style={{
            fontFamily: "android",
          }}
          id="horizontal-line-projects"
        >
          <h1 className=" cursor-pointer select-none" id="project-button">
            Projects
          </h1>
          <Image 
            alt="IconNoteFound"
            width={20}
            height={20}
            src="/images/assets/NavigationIcon.svg"
          />
        </div>
        <div className="select-none pr-2">
          <span
            className="text-gray-400 mr-2 font-bold text-2xl md:text-3xl"
            style={{ fontFamily: "MoonLight2" }}
          >
            ABOUT
          </span>
          <span
            className="ease-in-out duration-500 text-slate-200 text-xs xss:text-sm sm:text-2xl md:text-3xl lg:text-xl"
            style={{ fontFamily: "BebasNeue" }}
          >
            A Dedicated full-stack developer specializing in combining front-end
            finesse with back-end strength to create seamless applications. My
            freelancing experiences have sharpened my problem-solving abilities
            to deliver effective solutions. I have undertaken multiple physical
            internships in the tech industry and crafted customized solutions
            for various organizations. With a continuous learning mindset, I
            have mastered multiple web frameworks and libraries to contribute
            effectively in this ever-evolving tech landscape.
          </span>
        </div>
        <div className="flex w-full justify-between pr-2 items-center  mt-2 text-2xl font-bold hover:text-black ease-in-out duration-500">
          <div>
            <Link
              href="https://assets.ctfassets.net/s9120v75xzjs/1VYtUtqum63cmr4IVEcnpX/cd3134498709895d021acf755f619d5e/CV.pdf"
              target="_blank"
              className="items-center justify-start  text-white flex gap-2 underline decoration-orange-500"
              style={{ fontFamily: "dosislight" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi  font-bold bi-arrow-down"
                viewBox="0 0 16 16"
              >
                <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383" />
                <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z" />
              </svg>
              <span className=" select-none">Curriculum Vitae</span>
            </Link>
          </div>
          <div>
            <Link
              href="https://maps.app.goo.gl/HtAtod1haNx62nRp8"
              target="_blank"
              className="flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-geo text-slate-200"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"
                />
              </svg>
              <span
                className="text-slate-300 text-xl lg:text-2xl"
                style={{ fontFamily: "BebasNeue" }}
              >
                Ahmedabad, India
              </span>
            </Link>
          </div>
        </div>
      </section>
      <EventListeners />
    </div>
  );
}

export default AboutSection;
