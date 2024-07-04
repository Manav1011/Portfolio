'use client'
import {useEffect} from 'react'
function RollingUPSkills() {
    useEffect(() => {
        const Skills = document.getElementsByClassName("rolling-up-skills");
        let currentIndex = 0;
    
        function showNextSkill() {            
          // Hide current quote
          Skills[currentIndex].classList.add("hidden");
          // Calculate index of next quote
          currentIndex = (currentIndex + 1) % Skills.length;          
          Skills[currentIndex].classList.remove("hidden");
        }        
        Skills[currentIndex].classList.remove("hidden");        
        setInterval(showNextSkill, 3000);    
    }, []);
  return null
}

export default RollingUPSkills