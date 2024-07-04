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
      }, 900);
    },2000) 
  },[])
  return null
}

export default AnimateHeading