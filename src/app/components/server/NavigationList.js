async function NavigationList() {
  return (
    <section className="h-[100dvh] w-full absolute">
        <div className="ml-2 font-semibold text-4xl flex gap-6 sm:gap-20 text-slate-200 sm:flex-row flex-col h-full w-full justify-center items-start sm:justify-center sm:items-center" style={{
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