import PreLoadGraphic from "./components/server/PreLoadGraphic";
import AnimateHeading from "./components/client/AnimateHeading";
import MainGraphic from "./components/server/MainGraphic";

export default async function Home() {
  return (
      <main>
        <MainGraphic/>
        <PreLoadGraphic/>        
        <AnimateHeading/>
      </main>    
  );
}
