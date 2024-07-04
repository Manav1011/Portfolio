async function PreLoadGraphic() {
  return (
    <div className="h-[100dvh] fixed top-0 w-screen overflow-hidden" id="PreLoadGraphic" style={{
      backgroundImage:'url("/images/personal-images/landscape.webp")',
      backgroundPosition:'center',
      backgroundSize:'cover'
    }}>
      <div className="w-full h-full bg-black bg-opacity-70" style={{
        backdropFilter:'blur(6px)'
      }}>
        <div className="flex w-full h-full justify-center items-center">        
        <div>
        <h1 className="text-slate-300 opacity-0 inline-block text-2xl sm:text-4xl overflow-hidden whitespace-nowrap" id="HomePageGraphicText" style={{
            fontFamily:'Azonix',            
          }}><span>Manav Shah</span><span className=" text-orange-500"> | </span><span style={{fontFamily:'MoonLight2'}}>Portfolio</span></h1>        
        </div>
        </div>
      </div>
    </div>
  )
}

export default PreLoadGraphic