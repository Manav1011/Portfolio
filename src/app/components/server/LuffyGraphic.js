import GitHubCalendar from "react-github-calendar";
import '../../arc-reactor.css'

async function LuffyGraphic() {
  return (
    // <div className="w-full h-full flex justify-end">
      <section className="w-full h-[100dvh] text-slate-200 flex md:justify-start lg2:justify-start xl:justify-end xl:items-end flex-col overflow-hidden">      
      <div className="xl:mb-[3rem] 2xl:mb-[4.8rem] xs:mt-[9rem] xss:mt-[10rem] max-sm:mt-[12rem] md:mt-[16rem] lg2:mt-[20rem] max-md:w-full max-lg2:w-full xl:mr-2 flex flex-col">
         <GitHubCalendar
          username="Manav1011"
          colorScheme="dark"
        />
      </div>        
      </section>
    // </div>
  );
}

export default LuffyGraphic;
