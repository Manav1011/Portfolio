"use client";
import { useEffect } from "react";
function InitialProjectDetail() {
  useEffect(() => {
    if (typeof document !== 'undefined') {
        const PagesElement = document.getElementById("pages-option-el");
        const onScroll = async () => {            
          if(PagesElement.getBoundingClientRect().top <= 5){
            PagesElement.classList.add('bg-black')
          }else{
            PagesElement.classList.remove('bg-black')
          }
        };
        const ProjectDetailSection = document.getElementById('project-detail-scrolling-section')        
        ProjectDetailSection.addEventListener('touchmove', onScroll);        
        
        // Attach event listener for scroll (desktop)
        ProjectDetailSection.addEventListener('scroll', onScroll);        
    }
  }, []);
  return null;
}

export default InitialProjectDetail;
