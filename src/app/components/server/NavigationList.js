async function NavigationList() {
  return (
    <section className="h-[100dvh] w-full absolute slideRight slideRight hidden" id="NavigationList">
        <div className="ml-2 font-light text-2xl xss:text-2xl sm:text-3xl lg:text-5xl flex gap-2 text-slate-200 shadow-2xl  flex-row h-full w-full justify-start items-center" style={{
            fontFamily:'android'
        }}>            
            <hr className="border border-slate-200 w-10 lg:w-20 "/><h1 className="underline decoration-orange-500 underline-offset-4 cursor-pointer">Projects</h1>            
        </div>
    </section>
  )
}

export default NavigationList