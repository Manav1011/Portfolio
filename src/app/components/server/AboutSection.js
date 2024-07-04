async function AboutSection() {
  return (
    <div className="w-full absolute left-2 sm:left-2 bottom-2 flex flex-row">
      <section className="w-full sm:w-1/2 text-slate-200 text-justify">
        <div className="mr-4 select-none">
          <span
            className="text-gray-400 mr-2 font-bold text-2xl"
            style={{ fontFamily: "MoonLight2" }}
          >
            ABOUT
          </span>
          <span
            className="hover:text-black ease-in-out duration-500 text-slate-200 text-sm sm:text-xl"
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
      </section>
      <section className="w-1/2 hidden sm:flex justify-center items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={40}
          height={40}
          fill="currentColor"
          className="bi bi-geo text-slate-200"
          viewBox="0 0 16 16"
        >
              <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
        </svg>
          <h1 className="text-slate-300 text-4xl" style={{fontFamily: "BebasNeue"}}>Ahmedabad, India</h1>
      </section>
    </div>
  );
}

export default AboutSection;
