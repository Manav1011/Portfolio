import Image from "next/image"
async function page() {
  return (
    <section className="pt-2 flex h-full w-full flex-col">
        <div className="w-full h-4/5 bg-gradient-to-b flex flex-col items-center bg-gray-950" >
            <Image 
                src="/images/personal-images/portrait.webp"
                height={300}
                width={300}
                className="h-full w-auto p-6 rounded-full"
            />
        </div>
        <div className="w-full h-[100dvh]"></div>
    </section>
  )
}

export default page