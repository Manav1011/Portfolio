import AnimateHeading from "./components/client/AnimateHeading";

export default async function Home() {
  return (
    <main
      className="h-screen overflow-hidden w-full"
      style={{
        backgroundImage:
          "url('/images/backgrounds/artistic-blurry-colorful-wallpaper-background.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepat: "no-repeat",
      }}
    >
      <div
        className="w-full h-full flex justify-center items-center text-gray-200 text-5xl xl:text-8xl md:text-5xl lg:text-7xl sm:text-4xl font-bold"
        style={{ fontFamily: "Azonix" }}
      >
        <h1 className="ml15 flex sm:flex-row flex-col justify-center items-center gap-12">
          <span className="word">Something's</span>
          <div className="flex flex-col sm:flex-row">
            <span className="word">Cooking</span>
            <div className="hidden sm:flex">
              <span className="word">.</span>
              <span className="word">.</span>
              <span className="word">.</span>
            </div>
          </div>
        </h1>
      </div>
      <AnimateHeading />
    </main>
  );
}
