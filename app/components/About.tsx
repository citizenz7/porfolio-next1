"use client";

import Image from "next/image";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto" id="about">
        <h1 className="text-white text-4xl text-center md:text-5xl max-w-[450px] mx-auto font-semibold p-4 mb-5">
            A propos de <span className="text-orange-400">moi</span>
        </h1>
        <div className="px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center">

            <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to orange-800 opacity-30 animate-tilt animate-gradient-xy"></div>
                <div className="flex flex-row p-6">
                    <Image src={book} alt="book" className="w-auto h-[130px]" />
                    <div className="flex flex-col mt-4">
                        <h2 className="text-2xl font-bold text-white/80">Formation</h2>
                        <p className="text-lg text-white/70 mt-2">Développeur Web et Web mobile (2021)<br></br>Symfony (4, 5, 6, 7)<br></br>NextJS (13, 14, 15)</p>
                    </div>
                </div>
            </div>

            <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to orange-800 opacity-30 animate-tilt animate-gradient-xy"></div>
                <div className="flex flex-row p-6">
                    <Image src={pc} alt="pc" className="w-auto h-[130px]" />
                    <div className="flex flex-col mt-4">
                        <h2 className="text-2xl font-bold text-white/80">Soft Skills</h2>
                        <p className="text-lg text-white/70 mt-2">Intelligence émotionnelle, empathie, résolution de problèmes, gestion du temps, motivation, sens du collectif</p>
                    </div>
                </div>
            </div>

            <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to orange-800 opacity-30 animate-tilt animate-gradient-xy"></div>
                <div className="flex flex-row p-6">
                    <Image src={card} alt="card" className="w-auto h-[130px]" />
                    <div className="flex flex-col mt-4">
                        <h2 className="text-2xl font-bold text-white/80">Expérience</h2>
                        <p className="text-lg text-white/70 mt-2">Je suis intervenu sur divers projets Symfony, PHP, Wordpress, NextJS, NuxtJS</p>
                    </div>
                </div>
            </div>

            <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to orange-800 opacity-30 animate-tilt animate-gradient-xy"></div>
                <div className="flex flex-row p-6">
                    <Image src={finance} alt="finance" className="w-auto h-[130px]" />
                    <div className="flex flex-col mt-4">
                        <h2 className="text-2xl font-bold text-white/80">Hard Skills</h2>
                        <p className="text-lg text-white/70 mt-2">En tant que développeur fullstack, je me spécialise sur Symfony et NextJS, Tailwind et Boostrap, HTML, CSS, PHP, administration systèmes & serveurs, support utilisateur niveau 1 & 2, gestion de projet, formations techniques,...</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About