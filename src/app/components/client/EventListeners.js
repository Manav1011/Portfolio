'use client'
import { useEffect } from "react"
import { useRouter } from 'next/navigation'

function EventListeners() {
    const router = useRouter()
    useEffect(() => {
        document.getElementById('project-button').addEventListener('click', function() {
            document.getElementById('horizontal-line-projects').classList.remove('horizontal-line')
            document.getElementById('horizontal-line-projects').classList.add('horizontal-line-to-full')
            setTimeout(() => {
                router.push('/projects')
            }, 800);
        });
    }, []);
  return null
}

export default EventListeners