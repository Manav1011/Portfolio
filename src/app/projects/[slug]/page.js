import LinkSection from "../../components/server/LinkSection";
import Image from "next/image";
async function page({params}) {
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
      variables: {slug:params.slug},
    }),
  }).then(res => res.json()).then(data => data?.data?.projectListCollection?.items[0]).catch(error => console.log(error))      
  console.log(ProjectDetail);
  return (
    <>
    <section className="w-full h-[100dvh] overflow-hidden" style={{backgroundImage:'url("/images/backgrounds/6386.jpg")',backgroundPosition:'center',backgroundSize:'cover',backgroundAttachment:'fixed'}}>
    <div className="bg-black h-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 overflow-scroll">
      <div className="w-full flex justify-start flex-col items-center">
      <div className="flex w-3/5">
        <Image 
          src={ProjectDetail.preview.url}
          width={1980}
          height={1080}
          className="w-full h-auto rounded-b-3xl"
        />
      </div>
      <div className="flex w-3/5" style={{fontFamily:'Anton'}}>
        <h1 className="bg-gradient-to-r from-sky-300 via-sky-500 to-indigo-400 inline-block text-transparent bg-clip-text hover:text-white transition ease-in-out duration-700 text-8xl">{ProjectDetail.title}</h1>
      </div>
      <div className="flex w-3/5 text-white font-bold text-lg h-full" style={{fontFamily:'bebas'}}>
        <div className="w-1/2 flex flex-col justify-between">
          <div>
          <h1 className="text-2xl">
            <span className="text-sky-400 ">Domain - </span> <span className="text-white">{ProjectDetail.domain}</span></h1>
          </div>
          <div>
          <h1 className="text-2xl">
            <span className="text-sky-400 ">Developed For - </span> <span className="text-white">{ProjectDetail.client}</span>
          </h1>
          </div>
          <div>
          <h1 className="text-xl"><span className="text-sky-400 ">Tech Used - </span> <span className="text-white">{ProjectDetail.technology}</span></h1>
          </div>
        </div>
        <div className="w-1/2 text-justify">{ProjectDetail.desc}</div>
      </div>
      </div>
    </div>
    </section>
    <LinkSection />
    </>
  )
}

export default page