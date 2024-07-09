import { Link } from '@inertiajs/react'
import React from 'react'

const Pagination = ({links}) => {
    console.log(links)
  return (
    <nav className="text-center mt-4 flex gap-2 items-center justify-end font-mono">
        
        {links.map(link=>(
            <Link key={link.label} href={link.url||""} className={`inline-block p-2 mb-9 rounded lg brutalism brutalism-active  text-xs `+(link.active? " bg-primary brutalism-pressed ":" ")+(!link.url?"cursor-not-allowed  brutalism-pressed ":"hover:bg-primary")} dangerouslySetInnerHTML={{__html:link.label}} >
            
            </Link>
        ))}
        </nav>
  )
}

export default Pagination