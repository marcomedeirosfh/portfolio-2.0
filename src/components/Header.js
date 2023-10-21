import React from "react";
import { useState } from "react";



const Header = ({setView}) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleDrawer = () => { setIsOpen((isOpen) => !isOpen) }

    return (
        <header class="bg-dark-blue border-b border-green text-light-blue">
            <nav class="md:hidden flex w-4/5 mx-auto flex-row justify-between items-center">
                <button onClick={() => setView('hero')} ><h1 class="text-2xl cursor-pointer hover:text-white duration-300">Marco Medeiros</h1></button>
                <button onClick={handleDrawer}>
                    <div  class="p-4 space-y-2 bg-green hover:bg-green-focus duration-300">
                        <span class="block w-8 h-0.5 bg-dark-blue"></span>
                        <span class="block w-8 h-0.5 bg-dark-blue"></span>
                        <span class="block w-8 h-0.5 bg-dark-blue"></span>
                    </div>
                </button>
            </nav>

            <nav class="hidden w-4/5 mx-auto md:flex flex-row justify-between items-center">
                <button onClick={() => setView('hero')}><h1 class="my-5 text-4xl cursor-pointer hover:text-white duration-300">Marco Medeiros</h1></button>
                <ul class="flex flex-row gap-5">
                    <li class="cursor-pointer hover:text-white duration-300"><button onClick={() => setView('about')}>About</button></li>
                    <li class="cursor-pointer hover:text-white duration-300"><button onClick={() => setView('portfolio')}>Portfolio</button></li>
                </ul>
                <button onClick={() => setView('contact')} class="cursor-pointer bg-green text-2xl py-6 px-8 text-dark-blue font-bold text hover:bg-green-focus duration-300">CONTACT</button>
            </nav>

            { isOpen && (
                <div class="bg-dark-blue z-10">
                    <nav class="px-10 py-5 flex flex-col">
                        <ul>
                            <li class="m-2.5"><button onClick={() => { handleDrawer(); setView('about') }} class="hover:text-white duration-300">About</button></li>
                            <li class="m-2.5"><button onClick={() => { handleDrawer(); setView('portfolio') }} class="hover:text-white duration-300">Portfolio</button></li>
                            <li class="m-2.5"><button onClick={() => { handleDrawer(); setView('contact') }} class="hover:text-white duration-300">Contact</button></li>
                        </ul>
                    </nav>
                </div>
            ) }
            
        </header>
        
    )
}

export default Header