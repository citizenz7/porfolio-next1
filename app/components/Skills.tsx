import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaPhp, FaSymfony, FaVuejs, FaLinux, FaWordpress, FaBootstrap, FaGitSquare, FaGithub, FaDocker } from 'react-icons/fa'
import { SiApache, SiMysql, SiPostgresql, SiNginx, SiTailwindcss  } from "react-icons/si";
import { TbBrandNextjs, TbBrandNuxt  } from "react-icons/tb";

const skillIcons = [
    { icon: <FaHtml5 size={100} />, label: "HTML" },
    { icon: <FaCss3Alt size={100} />, label: "CSS" },
    { icon: <FaJsSquare size={100} />, label: "Javascript" },
    { icon: <FaBootstrap size={100} />, label: "Bootstrap" },
    { icon: <SiTailwindcss size={100} />, label: "TailwindCSS" },
    { icon: <FaPhp size={100} />, label: "PHP" },
    { icon: <FaGitSquare size={100} />, label: "Git" },
    { icon: <FaGithub size={100} />, label: "Github" },
    { icon: <FaSymfony size={100} />, label: "Symfony" },
    { icon: <FaWordpress size={100} />, label: "Wordpress" },
    { icon: <FaReact size={100} />, label: "React" },
    { icon: <TbBrandNextjs size={100} />, label: "NextJS" },
    { icon: <FaVuejs size={100} />, label: "VueJS" },
    { icon: <TbBrandNuxt size={100} />, label: "NuxtJS" },
    { icon: <FaLinux size={100} />, label: "Linux" },
    { icon: <SiApache size={100} />, label: "Apache" },
    { icon: <SiMysql size={100} />, label: "MySQL" },
    { icon: <SiPostgresql size={100} />, label: "PostgreSQL" },
    { icon: <SiNginx size={100} />, label: "Nginx" },
    { icon: <FaDocker size={100} />, label: "Docker" },
]

export const Skills = () => {
  return (
    <div className="bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32">
      <div className="text-white mx-auto p-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">Ma stack <span className="text-orange-400">technique</span></h2>
        <div className="max-w-5xl mx-auto flex justify-center items-center flex-col gap-5 sm:flex-row sm:flex-wrap">
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className="h-[150px] w-[150px] md:h-[180px] md:w-[180px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl">
                {skill.icon}
                <p className="mt-2">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
