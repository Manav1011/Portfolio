'use client'
import {useEffect} from 'react'
function RollingUPSkills() {
    useEffect(() => {
        const Skills = document.getElementsByClassName("rolling-up-skills");
        let currentIndex = 0;
        let intervalID = null
    
        function showNextSkill() {   
          if(Skills){
            try{
              // Hide current quote
              Skills[currentIndex].classList.add("hidden");
              // Calculate index of next quote
              currentIndex = (currentIndex + 1) % Skills.length;          
              Skills[currentIndex].classList.remove("hidden");
            }catch(err){
              clearInterval(intervalID)
            }
          }
        }        
        Skills[currentIndex].classList.remove("hidden");        
        intervalID = setInterval(showNextSkill, 3000);    
    }, []);
  return null
}

export default RollingUPSkills