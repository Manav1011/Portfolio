import AboutSection from "./AboutSection";
import NavBar from "./NavBar";
import NavigationList from "./NavigationList";
import WhatDoIDo from "./WhatDoIDo";
import LinkSection from "./LinkSection";
import LuffyGraphic from "./LuffyGraphic";
async function MainGraphic() {
  return (
    <section
      className="h-[100dvh] w-screen overflow-hidden bg-cover"
      style={{
        backgroundImage:
          "url('/images/backgrounds/orange-black.webp')",
        backgroundPosition: "center",
      }}
    >
      <div
        className="w-full h-full"
        style={{
          backdropFilter: "blur(10px)",
        }}
      >
        <NavBar/>
        <WhatDoIDo/>
        {/* <NavigationList/> */}
        <LuffyGraphic/>
        <AboutSection/>
        <LinkSection/>        
      </div>
    </section>
  );
}

export default MainGraphic;
