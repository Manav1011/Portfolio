async function NavigationList() {
  return (
    <section className="h-[100dvh] w-full absolute">
        <div className="ml-2 font-semibold text-2xl xss:text-4xl sm:text-5xl flex gap-3 xss:gap-6 lg:gap-8 text-slate-200 lg:flex-row flex-col h-full w-full justify-center items-start lg:justify-start lg:items-center" style={{
            fontFamily:'guildof'
        }}>
            <h1>Experience</h1>
            <h1>Projects</h1>
            <h1>Skills</h1>
            <h1>Achievements</h1>
            <h1>Education</h1>
        </div>
    </section>
  )
}

export default NavigationList