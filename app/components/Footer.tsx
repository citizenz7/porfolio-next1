import React from 'react';
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center">
        <h2 className="text-xl md:text-2xl font-bold">Olivier Prieur</h2>
        <div className="flex items-center justify-center gap-2 md:gap-5 md:mt-4">
            <a href="https://www.linkedin.com/in/oprieur-pro/" target="_blank">
                <FaLinkedin size={24} className="hover:text-gray-300" />
            </a>
            <a href="https://github.com/citizenz7" target="_blank">
                <FaGithub size={24} className="hover:text-gray-300" />
            </a>
            <a href="https://www.youtube.com/@citizenz7" target="_blank">
                <FaYoutube size={24} className="hover:text-gray-300" />
            </a>
        </div>
    </div>
  )
}
