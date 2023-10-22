import React from "react";

const Hero = () => {
    return (
        <section class="min-h-screen bg-dark-blue py-10 md:py-20 text-light-blue">
            <div class="w-4/5 mx-auto flex flex-col gap-10" >
                <p >Feel free to contact me through any of my social media channels or via e-mail.</p>
                <ul class="text-dark-blue w-60 mx-auto flex flex-col gap-5" >
                    <a href="https://www.linkedin.com/in/marco-medeiros-filho/" target="_blank"><li class="bg-green hover:bg-green-focus rounded-full px-4 py-1 font-bold text-lg text-center">LinkedIn</li></a>
                    <a href="https://www.instagram.com/marcomedeirosfh/" target="_blank"><li class="bg-green hover:bg-green-focus rounded-full px-4 py-1 font-bold text-lg text-center">Instagram</li></a>
                    <a href="mailto:marcomedeirosfilho@gmail.com" target="_blank"><li class="bg-green hover:bg-green-focus rounded-full px-4 py-1 font-bold text-lg text-center">E-Mail</li></a>
                </ul>
            </div>
        </section>
    )
}

export default Hero