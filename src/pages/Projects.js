import React from 'react';
import Projectcard from '../components/Projectcard';
import data from '../data';

export default function Projects() {
    const projects = data.map(project => {
        return <Projectcard 
        key={project.id} 
        {...project} />
    })

    return(
        <div className='container'>
            <h1>My Projects</h1>
            <main className='projects-content'>
                <div className='projects-text'>
                    <p>Take a look at some of my projects</p>
                </div>
                <div className='projects'>
                    {projects}
                </div>
            </main>
        </div>
    )
}