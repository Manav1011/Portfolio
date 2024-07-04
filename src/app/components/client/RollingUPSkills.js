'use client'
import {useEffect} from 'react'
function RollingUPSkills() {
    useEffect(() => {
        const Skills = document.getElementsByClassName("rolling-up-skills");
        let currentIndex = 0;
        if(window.rollingInterval){          
          clearInterval(window.rollingInterval)
        }
        function showNextSkill() {   
          if(Skills){            
            try{
              // Hide current quote
              Skills[currentIndex].classList.add("hidden");
              // Calculate index of next quote
              currentIndex = (currentIndex + 1) % Skills.length;          
              Skills[currentIndex].classList.remove("hidden");
            }catch(err){              
            }
          }
        }        
        Skills[currentIndex].classList.remove("hidden");        
        window.rollingInterval = setInterval(showNextSkill, 3000);    
    }, []);
  return null
}

export default RollingUPSkills