'use client'
import { useEffect } from "react";
function InitialLoadingProjects() {
    useEffect(() => {
        document.getElementById('LinkSection').classList.remove('hidden')
    }, []);
  return null
}

export default InitialLoadingProjects