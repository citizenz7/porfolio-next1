"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import profilepic from "../assets/profilepic.png";

const Hero = () => {
    return (
        <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">

            <div className="absolute rounded-[50%] bg-radial from-[#000] from-45% to-[#2B1942] to-80% w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2">
            </div>

            <div className="relative px-6">
                <div className="text-center">
                    <h1 className="text-[#98B4CE] text-3xl md:text-5xl">Bienvenue !</h1>
                    <h2 className="text-[#E48A57] text-5xl md:text-7xl font-bold">Je m&#39;appelle Olivier Prieur</h2>
                </div>

                <motion.div className="hidden md:block absolute left-[280px] top-[170px]" drag>
                    <Image
                        src={cursor}
                        height="170"
                        width="170"
                        alt="cursor"
                        className=""
                        draggable={false}
                    />
                </motion.div>

                <motion.div className="hidden md:block absolute right-[220px] top-[20px]" drag>
                    <Image
                        src={lightning}
                        height="120"
                        width="120"
                        alt="lightning"
                        className=""
                        draggable={false}
                    />
                </motion.div>

                <p className="text-center mx-auto text-xl md:text-2xl max-w-[750px] mt-8 text-white/80">
                    Je suis développeur web fullstack Symfony NextJS<br></br>
                    Technicien numérique : Développement web, Administration systèmes et serveurs, Formation, Support utilisateur
                </p>

                <Image
                    src={profilepic}
                    alt="Coucu, c'est moi !"
                    className="h-auto w-auto mx-auto"
                />
            </div>
        </div>
    );
};

export default Hero;
