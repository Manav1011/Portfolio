'use client'
import {useEffect} from 'react'

function AnimateHeading() {
  return (
    useEffect(() => {
        anime.timeline()
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  })
    },[])
  )
}

export default AnimateHeading