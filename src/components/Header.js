import React from "react";



const Header = () => {
    return (
        <header class="bg-dark-blue border-b border-green text-light-blue">
            <nav class="hidden w-4/5 mx-auto md:flex flex-row justify-between items-center">
                <h1 class="my-5 text-4xl cursor-pointer hover:text-white duration-300">Marco Medeiros</h1>
                <a href="#contact" class="cursor-pointer bg-green text-2xl py-6 px-8 text-dark-blue font-bold text hover:bg-green-focus duration-300">CONTACT</a>
            </nav>
        </header>
        
    )
}

export default Header