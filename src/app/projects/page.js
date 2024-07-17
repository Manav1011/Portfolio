import NavBar from "../components/server/NavBar";
import LinkSection from "../components/server/LinkSection";
import InitialLoadingProjects from "../components/client/InitialLoadingProjects";
import WhatDoIDo from "../components/server/WhatDoIDo";
import Link from "next/link";

async function page() {
  const ProjectsList = await fetch(process.env.CONTENTFUL_URL, {
    cache: "no-cache",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CONTENTFUL_AUTH}`,
    },
    body: JSON.stringify({
      query: `query {
  projectListCollection{
    items{      
    _id,
      title,
      slug
    }
  }
}`,
      variables: null,
    }),
  }).then(res => res.json()).then(data => data.data.projectListCollection.items).catch(error => console.log(error))      
  return (
    <>
      <NavBar home={true} />
      <WhatDoIDo />
      <section
        className="h-[100dvh] w-full overflow-hidden absolute flex items-end bg-cover pr-16 pl-2 md:pl-0"
        style={{
          backgroundImage: "url('/images/backgrounds/orange-black.webp')",
          backgroundPosition: "center",
        }}
      >
        <div className="flex w-full max-lg:h-full  justify-center items-center">
          <div className="w-3/5 hidden lg:flex overflow-hidden justify-center pr-28">
            <div className="">
              <img
                width={1920}
                height={1080}
                id="project-graphic"
                loading="lazy"
                className="max-lg:hidden w-full h-auto rounded-tr-2xl rounded-b-none"
                src="/images/projects/gic.webp"
              />
            </div>
          </div>
          <div className="lg:w-2/5 w-full flex text-end flex-col">
            <div
              className="font-light text-2xl w-full border-b-4 border-orange-500 z-20 xss:text-2xl sm:text-3xl lg:text-5xl flex gap-2 text-slate-200"
              style={{
                fontFamily: "android",
              }}
            >
              <h1 className="select-none w-full  text-left lg:text-right slideRightProjectTitle">
                Projects
              </h1>
            </div>
            <div
              className="flex flex-col text-slate-400 max-h-[50dvh] lg:overflow-y-scroll gap-2"
              style={{
                fontFamily: "bebas",
              }}
              id="projectSection"
            >
            {ProjectsList.map((el,index) => (
              <div
                className="font-light text-2xl slideRightProjectTitle lg:w-full project-title border-b-2 border-white lg:transition-all lg:duration-300 xss:text-2xl sm:text-3xl lg:text-4xl flex gap-2 " 
                data-title={el.slug}
                key={index}
              >
                <Link className="select-none w-full text-left lg:text-right" href={`/projects/${el.slug}`}>
                  {el.title}
                </Link>
              </div>
            ))}
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
