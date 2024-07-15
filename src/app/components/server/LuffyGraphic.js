import GitHubCalendar from "react-github-calendar";
import '../../arc-reactor.css'

async function LuffyGraphic() {
  return (
    // <div className="w-full h-full flex justify-end">
      <section className="w-full h-[100dvh] text-slate-200 flex 2xl:justify-end 2xl:items-end flex-col overflow-hidden">      
      <div className="2xl:mb-[4.8rem] 2xl:mr-2 flex flex-col">
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
