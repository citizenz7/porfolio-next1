"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navlinks = [
    { title: "Accueil", path: "#" },
    { title: "A propos", path: "#about" },
    { title: "Portfolio", path: "#portfolio" },
    { title: "Contact", path: "#contact" },
];

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNAv = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
                stiffness: 20,
                damping: 15
            }
        }
    }

    return (
        <div className="bg-black text-white pt-6">
            <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[500px]">
                <ul className="flex flex-row p-4 space-x-8">
                    {navlinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path}>
                                <p>{link.title}</p>
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a href="#contact" className="group">
                            <h1 className="text-lg font-bold text-white/70 cursor-pointer">Me contacter</h1>
                            <div className="relative">
                                <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full"></div>
                                <div className="mt-1 absolute w-1/3 h-1 transition-all duration-300 ease-out bg-orange-600 rounded-full group-hover:w-full"></div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <div onClick={toggleNAv} className="md:hidden absolute top-5 right-5 border border-white/70 text-white/70 rounded p-2 z-50">
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            <motion.div
                initial={false}
                animate={nav ? "open" : "closed"}
                variants={menuVariants}
                className="fixed left-0 top-0 w-full z-40 bg-black/90"
            >
                <ul className="text-4xl font-semibold my-24 text-center space-y-8">
                    {navlinks.map((link, index) => (
                        <li key={index} className="p-4 text-2xl">
                            <Link href={link.path} onClick={closeNav}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.div>

        </div>
    )
}

export default Navbar