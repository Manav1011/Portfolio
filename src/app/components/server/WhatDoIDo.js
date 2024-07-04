import RollingUPSkills from "../client/RollingUPSkills"
async function WhatDoIDo() {
  return (
    <>
    <section className="text-white select-none z-10 pl-20 pt-10 text-6xl text-right md:text-left md:text-8xl absolute right-0 md:left-0" style={{
        fontFamily:'Anton'
    }}>
        <div>I DO </div> 
        <div className="overflow-hidden  leading-none">
            <h1 className="text-orange-600 hover:text-white transition ease-in-out duration-700 whitespace-nowrap bottom-up hidden rolling-up-skills">Full-Stack Dev</h1>
            <h1 className="text-orange-600 hover:text-white transition ease-in-out duration-700 whitespace-nowrap bottom-up hidden rolling-up-skills">Data Science </h1>
            <h1 className="text-orange-600 hover:text-white transition ease-in-out duration-700 whitespace-nowrap bottom-up hidden rolling-up-skills">Cloud Comp</h1>
            <h1 className="text-orange-600 hover:text-white transition ease-in-out duration-700 whitespace-nowrap bottom-up hidden rolling-up-skills">DevOps</h1>
            <h1 className="text-orange-600 hover:text-white transition ease-in-out duration-700 whitespace-nowrap bottom-up hidden rolling-up-skills">Network Engg</h1>
        </div> 
    </section>
    <RollingUPSkills/>
    </>
  )
}

export default WhatDoIDo