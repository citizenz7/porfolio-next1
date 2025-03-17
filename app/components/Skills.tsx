import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaPhp, FaSymfony, FaVuejs, FaLinux, FaWordpress, FaBootstrap, FaGitSquare, FaGithub } from 'react-icons/fa'
import { SiApache, SiMysql, SiNginx, SiTailwindcss  } from "react-icons/si";
import { TbBrandNextjs, TbBrandNuxt  } from "react-icons/tb";

const skillIcons = [
    { icon: <FaHtml5 size={140} />, label: "HTML" },
    { icon: <FaCss3Alt size={140} />, label: "CSS" },
    { icon: <FaJsSquare size={140} />, label: "Javascript" },
    { icon: <FaBootstrap size={140} />, label: "Bootstrap" },
    { icon: <SiTailwindcss size={140} />, label: "TailwindCSS" },
    { icon: <FaPhp size={140} />, label: "PHP" },
    { icon: <FaGitSquare size={140} />, label: "Git" },
    { icon: <FaGithub size={140} />, label: "Github" },
    { icon: <FaSymfony size={140} />, label: "Symfony" },
    { icon: <FaWordpress size={140} />, label: "Wordpress" },
    { icon: <FaReact size={140} />, label: "React" },
    { icon: <TbBrandNextjs size={140} />, label: "NextJS" },
    { icon: <FaVuejs size={140} />, label: "VueJS" },
    { icon: <TbBrandNuxt size={140} />, label: "NuxtJS" },
    { icon: <FaLinux size={140} />, label: "Linux" },
    { icon: <SiApache size={140} />, label: "Apache" },
    { icon: <SiMysql size={140} />, label: "MySQL" },
    { icon: <SiNginx size={140} />, label: "Nginx" },
]

export const Skills = () => {
  return (
    <div className="bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32">
      <div className="text-white w-[300px] md:min-w-[1200px] mx-auto p-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">Ma stack <span className="text-orange-400">technique</span></h2>
        <div className="flex justify-center items-center flex-col gap-5 sm:flex-row md:flex-wrap">
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className="h-[170px] w-[170px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl">
                {skill.icon}
                <p className="mt-2">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
