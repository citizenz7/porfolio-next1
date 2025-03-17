"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import portfolio from "../assets/portfolio-op.png";
import pgo from "../assets/pgo.png";
import citizenz from "../assets/citizenz.png";
import onf from "../assets/onf.jpg";

const projects = [
    {
        title: "Blog",
        desc: "Blog Geek & Libre : blog réalisé avec Symfony. Infos, notes, tutos sur le développement web, l&#39;admin système, Gnu/Linux, etc.",
        devStack: "Symfony 6, PHP 8, MariaDB, Bootstrap, Apache, Twig",
        link: "https://www.citizenz.info",
        git: "https://github.com/citizenz7",
        src: citizenz,
    },
    {
        title: "PengolinCoin cryptomoney",
        desc: "Site web de la crypto-monnaie BabyPengolincoin fait avec Symfony",
        devStack: "Symfony 6, PHP 8.1, MariaDB, Bootstrap, Apache, Twig",
        link: "https://www.babypengolincoin.xyz",
        git: "https://github.com/citizenz7/babypengolincoin",
        src: pgo,
    },
    {
        title: "PLateform ONF",
        desc: "Dashboard de mouvement des agents à l'ONF de Nevers. Hébergement sur une machine virtuelle Windows server 2016.",
        devStack: "PHP 7, MySQL, HTML, JQuery, Bootstrap, Apache, Windows Server, Virtual machine",
        link: "https://www.onf.fr/",
        git: "#",
        src: onf,
    },
    {
        title: "Portfolio",
        desc: "Portfolio réalisé avec Symfony 6 et hébergé sur une VPS Hetzner (Apache, MariaDB, PHP 8.3)",
        devStack: "Symfony 6, PHP 8, MariaDB, Bootstrap, Apache, Twig, VPS",
        link: "https://www.olivierprieur.fr",
        git: "https://github.com/citizenz7",
        src: portfolio,
    }
]

const Portfolio = () => {
  return (
    <div id="portfolio" className="text-white bg-gradient-to-b from-black to-[#381a5f] py-10 mt-20 md:mt-32">

        <h1 className="text-white text-4xl text-center md:text-5xl max-w-[450px] mx-auto font-semibold my-12 px-6">
            Mes réalisa<span className="text-orange-400">tions</span>
        </h1>

        <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-20 space-y-24">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 75 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className={`mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row"}`}
                >
                    <div className="space-y-2 max-w-[550px]">
                        <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
                        <h2 className="text-4xl">{project.title}</h2>
                        <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
                        <p className="text-lg text-orange-400 font-semibold">{project.devStack}</p>
                        <div className="w-64 h-[1px] bg-gray-400 my-4 flex">
                            <a href={project.link} className="mr-6 mt-4" target="_blank">
                                <svg className="animate-bounce" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M10.73 14.97c.27.11.36.41.24.66s-.41.37-.66.24h-.01c-.46-.21-.89-.51-1.27-.9a4.49 4.49 0 0 1 0-6.36l3.53-3.53a4.49 4.49 0 0 1 6.36 0a4.49 4.49 0 0 1 0 6.36l-1.63 1.63l-.15-1.26l1.08-1.08a3.513 3.513 0 0 0 0-4.95a3.513 3.513 0 0 0-4.95 0L9.73 9.32a3.513 3.513 0 0 0 0 4.95c.3.3.64.53 1 .7m-6.65 4.95a4.49 4.49 0 0 1 0-6.36l1.63-1.63l.15 1.26l-1.08 1.08a3.513 3.513 0 0 0 0 4.95a3.513 3.513 0 0 0 4.95 0l3.54-3.54a3.513 3.513 0 0 0 0-4.95c-.3-.3-.64-.53-1-.7v.01a.49.49 0 0 1-.24-.67c.12-.25.41-.37.66-.24h.01c.46.21.89.51 1.27.9a4.49 4.49 0 0 1 0 6.36l-3.53 3.53a4.49 4.49 0 0 1-6.36 0"></path></svg>
                            </a>
                            <a href={project.git} className="mt-4" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.64 3.64 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2 2 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.1 2.1 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.9 3.9 0 0 1 1.025-2.688a3.6 3.6 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.43 9.43 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.6 3.6 0 0 1 .1 2.65a3.87 3.87 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.562 4.937a2.37 2.37 0 0 1 .674 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <Image src={project.src} alt={project.title} className="h-[350px] w-[500px] object-cover border border-gray-500 rounded" />
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Portfolio