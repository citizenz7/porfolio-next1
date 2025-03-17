import React from 'react'
import Image from 'next/image'
import phone from '../assets/phone.png'
import mail from '../assets/mail.png'

export const Contact = () => {
  return (
    <div id="contact" className="max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex justify-center items-center">
            <ul className="space-y-4 ">
                <li className="flex items-center">
                    <Image src={phone} alt="phone" className="h-[110px] w-auto mr-6" />
                    <p className="text-xl">06 30 65 19 52</p>
                </li>
                <li className="flex items-center">
                    <Image src={mail} alt="mail" className="h-[110px] w-auto mr-6" />
                    <p className="text-xl">contact@olivierprieur.fr</p>
                </li>
            </ul>
        </div>

        <div className="bg-white/10 p-6 rounded-xl max-w-[1000px]">
            <h2 className="text-center text-xl md:text-2xl font-bold text-orange-400 mb-4">Contactez-moi à l&#39;aide du formulaire ci-dessous</h2>
            <form className="space-y-4" action="https://getform.io/f/ajjmyrda" method="POST">
                <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" name="firstname" placeholder="Prénom" className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" />
                    <input type="text" name="name" placeholder="Nom" className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" />
                    <input type="email" name="email" placeholder="E-mail" className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" />
                    <input type="text" name="phone" placeholder="Téléphone" className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" />
                </div>
                <textarea name="message" rows={7} placeholder="Votre message" className="bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" />
                <button type="submit" className="bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl">Envoyer</button>
            </form>
        </div>
    </div>
  )
}
