'use client'
import { useEffect } from "react";
function InitialLoadingProjects() {
    useEffect(() => {
        document.getElementById('LinkSection').classList.remove('hidden')
        const image_graphic = document.getElementById('project-graphic')        

        if(window.screen.width){
          document.querySelectorAll('.project-title').forEach(el => {
            el.addEventListener('mouseover',() => {
              const hovered_el = el.getAttribute('data-title')
              if(hovered_el == 'gic'){
                image_graphic.src = '/images/projects/gic.webp'
              }else if(hovered_el == 'swasautech'){
                image_graphic.src = '/images/projects/swasau.webp'
              }else if(hovered_el == 'wms'){
                image_graphic.src = '/images/projects/dynamic-led-display-prod.webp'
              }else if(hovered_el == 'smartroll'){
                image_graphic.src= '/images/projects/smartroll.webp'
              }
            })
          })
        }
    }, []);
  return null
}

export default InitialLoadingProjects