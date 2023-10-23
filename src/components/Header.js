import React from "react";



const Header = () => {
    return (
        <header class="sticky top-0 bg-dark-blue border-b border-green text-light-blue z-10 ">
            <nav class="w-4/5 mx-auto flex flex-row justify-between items-center">
                <a href="#hero"><h1 class="my-5 text-2xl md:text-4xl cursor-pointer hover:text-white duration-300">Marco Medeiros</h1></a>
                <a href="#contact" class="cursor-pointer bg-green text-xl md:text-2xl py-3 md:py-6 px-4 md:px-8 text-dark-blue font-bold text hover:bg-green-focus duration-300">CONTACT</a>
            </nav>
        </header>
        
    )
}

export default Header