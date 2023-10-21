import React from "react";
import { useState } from "react";



const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleDrawer = () => { setIsOpen((isOpen) => !isOpen) }

    return (
        <header class="bg-dark-blue">
            <nav class="md:hidden flex flex-row justify-around items-center text-light-blue">
                <h1 class="text-2xl cursor-pointer hover:text-white duration-700">Marco Medeiros</h1>
                <div onClick={handleDrawer} class="p-4 space-y-2 bg-green hover:bg-green-focus duration-700">
                    <span class="block w-8 h-0.5 bg-dark-blue"></span>
                    <span class="block w-8 h-0.5 bg-dark-blue"></span>
                    <span class="block w-8 h-0.5 bg-dark-blue"></span>
                </div>
            </nav>

            <nav class="hidden md:flex flex-row text-light-blue justify-around items-center border-b border-green">
                <h1 class="m-5 text-4xl cursor-pointer hover:text-white duration-700">Marco Medeiros</h1>
                <ul class="flex flex-row gap-5">
                    <li class="cursor-pointer hover:text-white duration-700">About</li>
                    <li class="cursor-pointer hover:text-white duration-700">Portfolio</li>
                </ul>
                <p class="cursor-pointer bg-green text-2xl py-6 px-8 text-dark-blue font-bold text hover:bg-green-focus duration-700">CONTACT</p>
            </nav>

            { isOpen && (
                <div class="bg-dark-blue z-10">
                    <nav class="px-10 py-5 flex flex-col text-light-blue">
                        <ul>
                            <li onClick={handleDrawer} class="m-2.5 hover:text-white">About</li>
                            <li onClick={handleDrawer} class="m-2.5 hover:text-white">Portfolio</li>
                            <li onClick={handleDrawer} class="m-2.5 hover:text-white">Contact</li>
                        </ul>
                    </nav>
                </div>
            ) }
            
        </header>
        
    )
}

export default Header