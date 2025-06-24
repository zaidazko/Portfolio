import React from 'react'
import ScrollReveal from '../src/blocks/TextAnimations/ScrollReveal/ScrollReveal'


const Projects = () => {

    const projects = [
        { title: "AstroX", description: "An Asteroid Tracker that allows you to view recent live asteroids and monitor them. Includes a 3D Model to simulate the asteroids position relative to earth. Powered by the Nasa NeoWs API", technologies: ["React", "Express", "Node.js", "MongoDB", "TailwindCSS"], thumbnail: "projectBackgrounds/asteroidBackground.png"},
        { title: "Pokesprite Generator", description: "Generator for Pokemon sprites featuring pokemon from generations 1-9. Lets the user generate a sprite of any pokemon as well as the shiny version of that pokemon. Uses the PokeAPI to gain access to the database of sprites.", technologies: ["React", "Tailwind CSS", "PokeAPI", "Vercel"], thumbnail: "projectBackgrounds/pokesprite.png"},
        { title: "GameLog", description: "Users can save, wishlist, and log their favorite games from a large collection of over 10,000+ games possible with the RAWG API. Users can set statuses on games in their library, such as dropped, completed, currently playing, etc", technologies: ["React", "Express", "Node.js", "PostgreSQL"], thumbnail: "projectBackgrounds/gamelogHomepage.png"}
    ]
  return (
    <div className="gap-10 flex flex-col items-center w-320 h-160 ">
        <ScrollReveal baseOpacity={0.1} enableBlur={true} baseRotation={10} blurStrength={10} textClassName="text-4xl font-bold text-white mt-5 tracking-tight">
            Projects / Experience 
        </ScrollReveal>
        {/* <h1 className="text-5xl text-white tracking-tight font-bold"></h1> */}
        <div className="w-full place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project, index) => (
                <div key={index} className="flex flex-col gap-5 bg-black/50 h-120 w-90 rounded-2xl p-5">
                    <img src={project.thumbnail} alt="" className="w-80 h-52 object-cover rounded-md"></img>
                    <div className="flex flex-col gap-3">
                        <h2 className="text-xl text-white font-bold tracking-wide">{project.title}</h2>
                        <p className="text-sm text-slate-400 font-medium">{project.description}</p>
                        <div className="flex gap-3">
                            {project.technologies.map((technology, index) => (
                                <div key={index} className="bg-slate-400 p-1 rounded-sm">
                                    <p className="text-black text-xs font-medium">{technology}</p>
                                </div>
                            ))}
                        </div>



                    </div>

                </div>
            ))}


        </div>
    </div>
  )
}

export default Projects
