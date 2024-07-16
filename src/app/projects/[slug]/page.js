import LinkSection from "../../components/server/LinkSection";
import Image from "next/image";
async function page({ params }) {
  const ProjectDetail = await fetch(process.env.CONTENTFUL_URL, {
    cache: "no-cache",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CONTENTFUL_AUTH}`,
    },
    body: JSON.stringify({
      query: `# Write your query or mutation here
query($slug:String!){
	projectListCollection(where:{slug:$slug}){
    items{
      title,
      desc,
      preview{
        url
      },      
      domain,
      client,
      technology,
      url,
      screensCollection{
        items{
          url
        }
      }
    }
  }
}`,
      variables: { slug: params.slug },
    }),
  })
    .then((res) => res.json())
    .then((data) => data?.data?.projectListCollection?.items[0])
    .catch((error) => console.log(error));
  // console.log(ProjectDetail.screensCollection.items[0].url);
  return (
    <>
      <section
        className="w-full h-[100dvh] overflow-hidden"
        style={{
          backgroundImage: 'url("/images/backgrounds/6386.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >        
        <div className="bg-black h-full w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 overflow-scroll">
          <div className="w-full flex justify-start flex-col items-center">
            <div className="flex sm:w-3/5 xs:w-full xs:px-2 lg:p-0">
              <Image
                src={ProjectDetail.preview.url}
                width={1980}
                height={1080}
                className="w-full h-auto rounded-b-3xl rounded-none"
              />
            </div>
            <div className="flex 2xl:w-3/5 xs:w-full justify-start text-left" style={{ fontFamily: "Anton" }}>
              <h1 className="bg-gradient-to-r xss:w-4/5  xs:pl-2 from-sky-300 via-sky-500 to-indigo-400 inline-block text-transparent bg-clip-text hover:text-white transition ease-in-out duration-700 2xl:text-[5rem] lg2:text-6xl md:text-5xl xs:text-3xl">
                {ProjectDetail.title}
              </h1>
            </div>
            <div
              className="flex sm:w-3/5 xs:w-full xs:pr-12 xs:pl-2 text-white font-bold text-lg h-full xs:flex-col 2xl:flex-row gap-4 mt-4"
              style={{ fontFamily: "bebas" }}
            >
              <div className="xs:w-full 2xl:w-1/2 flex flex-col justify-between">
                <div>
                  <h1 className="text-2xl">
                    <span className="text-sky-400 ">Domain - </span>{" "}
                    <span className="text-white">{ProjectDetail.domain}</span>
                  </h1>
                </div>
                <div>
                  <h1 className="text-2xl">
                    <span className="text-sky-400 ">Developed For - </span>{" "}
                    <span className="text-white">{ProjectDetail.client}</span>
                  </h1>
                </div>
                <div>
                  <h1 className="text-xl">
                    <span className="text-sky-400 ">Tech Used - </span>{" "}
                    <span className="text-white">
                      {ProjectDetail.technology}
                    </span>
                  </h1>
                </div>
              </div>
              <div className="md:w-full 2xl:w-1/2 text-justify">{ProjectDetail.desc}</div>
            </div>
            <div className="sm:w-3/5 xs:w-full flex flex-col justify-start mt-20">
              <h1 className="bg-gradient-to-r xs:w-4/5  xs:pl-2 from-sky-300 via-sky-500 to-indigo-400 inline-block text-transparent bg-clip-text hover:text-white transition ease-in-out duration-700 2xl:text-[5rem] lg2:text-6xl md:text-5xl xs:text-3xl"  style={{ fontFamily: "Anton" }}>
                PAGES
              </h1>
              <div className="flex flex-col gap-4">
              {ProjectDetail.screensCollection.items.map((el,index) => (
                <div className="flex w-full xs:pl-2 xs:pr-12 lg:p-0" key={index}>
                  <Image 
                    width={1980}
                    height={1080}                    
                    src={el.url}
                    loading="lazy"
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <LinkSection page="project-detail"/>
    </>
  );
}

export default page;
