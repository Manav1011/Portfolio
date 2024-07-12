import Link from "next/link"
async function NavBar() {  
  return (
    <section className="pl-2 select-none pt-4 text-4xl md:text-5xl md:pr-2 w-full absolute top-0 text-white z-20 flex gap-4 md:gap-10 justify-start md:justify-end topTobottom" id="NavBarMain" style={{
        fontFamily:'guildof'
    }}> 
          <Link href="/contact">
            <h1>Contact.</h1>
          </Link>
            <Link href="https://assets.ctfassets.net/s9120v75xzjs/6bClq2ANEu3AYeEn9SmOJ/6cf0c3cdc6e73e7f6080e38b2f1c38db/RESUME__1_.pdf" target="_blank">
              <h1>Resume.</h1>            
            </Link>
    </section>
  )
}

export default NavBar