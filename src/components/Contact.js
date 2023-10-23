import React from "react";

const Hero = () => {
    return (
        <section id="contact" class="bg-dark-blue py-10 md:py-20 text-light-blue">
            <div class="w-4/5 max-w-7xl mx-auto flex flex-col gap-10" >
                <h2 class="text-2xl text-green-focus">Contact</h2>
                <p class="mx-auto">Feel free to contact me via e-mail or through any of my social media channels.</p>
                <ul class="text-dark-blue w-60 mx-auto flex flex-col gap-5" >
                    <a href="mailto:marcomedeirosfilho@gmail.com" target="_blank" rel="noreferrer"><li class="bg-green hover:bg-green-focus rounded-full px-4 py-1 font-bold text-lg text-center">E-Mail</li></a>
                    <a href="https://www.linkedin.com/in/marco-medeiros-filho/" target="_blank" rel="noreferrer"><li class="bg-green hover:bg-green-focus rounded-full px-4 py-1 font-bold text-lg text-center">LinkedIn</li></a>
                    <a href="https://www.instagram.com/marcomedeirosfh/" target="_blank" rel="noreferrer"><li class="bg-green hover:bg-green-focus rounded-full px-4 py-1 font-bold text-lg text-center">Instagram</li></a>
                </ul>
            </div>
        </section>
    )
}

export default Hero