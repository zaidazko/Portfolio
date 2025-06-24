import React from 'react'
import Aurora from '../src/blocks/Backgrounds/Aurora/Aurora'
import ScrollFloat from '../src/blocks/TextAnimations/ScrollFloat/ScrollFloat';


const Skills = () => {
  const skills = [
    { name: "Javascript", logo: "/assets/skill-icons/javascript.png", type: "Language"},
    { name: "Python", logo: "/assets/skill-icons/python.png", type: "Language"},
    { name: "C++", logo: "/assets/skill-icons/c++.png", type: "Language"},
    { name: "React", logo: "/assets/skill-icons/react.png", type: "Framework"},
    { name: "HTML", logo: "/assets/skill-icons/html.png", type: "Markup Language"},
    { name: "CSS", logo: "/assets/skill-icons/css.png", type: "Style Sheet Language"},
    { name: "Tailwind CSS", logo: "/assets/skill-icons/tailwind.png", type: "CSS Framework"},
    { name: "Node.js", logo: "/assets/skill-icons/Node.png", type: "Backend"},
    { name: "MongoDB", logo: "/assets/skill-icons/MongoDB.png", type: "Database"},
    { name: "Git", logo: "/assets/skill-icons/git.png", type: "DevOps"},
    { name: "Vercel", logo: "/assets/skill-icons/Vercel.png", type: "Deployment"},
    { name: "Express.js", logo: "/assets/skill-icons/express.png", type: "Node Framework"}
    
  ]


  return (
    <>
    <div className="p-10 flex flex-col gap-15 bg-gray-400/15 shadow-xl w-250 h-[auto] rounded-2xl text-center">
        <div className="fixed inset-0 -z-9">
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1}
            speed={1}
          />
        </div>
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
          textClassName="text-4xl font-bold text-white -mt-4 p-1 tracking-tight"
        >
          {/* <h1 className="text-4xl font-bold text-white mt-5 tracking-tight">Skills and Technologies </h1> */}
          Skills and Technologies
        </ScrollFloat>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-10">
          {skills.map((skill, index) => (
            <div className="flex items-center gap-5 px-2 py-2" key={index}>
              <img className="h-12 w-12 justify-self-start" src={skill.logo} alt={skill.name}></img>
              <div className="flex flex-col w-full text-end">
                <p className="text-lg font-bold tracking-wide text-white">{skill.name}</p>
                <p className="text-md text-slate-300">{skill.type}</p>
              </div>
            </div>
          ))}

        </div>
    </div>
    </>
  )
}

export default Skills
