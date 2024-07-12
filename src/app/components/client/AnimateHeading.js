'use client'
import {useEffect} from 'react'

function AnimateHeading() {
  useEffect(() => {
    let HomePageGraphicText = document.getElementById('HomePageGraphicText')
    HomePageGraphicText.classList.remove('opacity-0')
    HomePageGraphicText.classList.add('HomePageGraphicText')
    let PreLoadGraphic = document.getElementById('PreLoadGraphic')
    setTimeout(async () => {
      PreLoadGraphic.classList.add('invisible-it')
      setTimeout(async () => {
        PreLoadGraphic.remove()
        document.getElementById('AboutSection').classList.remove('translate-y-full')
        document.getElementById('AboutSection').classList.remove('hidden')
        document.getElementById('LinkSection').classList.remove('hidden')
        // document.getElementById('NavigationList').classList.remove('hidden')
        document.getElementById('NavBarMain').classList.remove('hidden')
      }, 900);
    },2000) 
  },[])
  return null
}

export default AnimateHeading