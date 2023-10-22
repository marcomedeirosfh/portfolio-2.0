import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Portfolio = () => {
    return (
        <section class="min-h-screen bg-dark-blue py-10 md:py-20 text-light-blue">
            <div class="w-4/5 mx-auto flex flex-col gap-10" >
                <div class="flex flex-col md:flex-row mx-auto gap-2 items-center">
                    <a class="bg-green w-fit h-fit mx-auto" href="https://teckno.dell.com" target="_blank">
                        <StaticImage class="md:opacity-30 opacity-50 hover:opacity-100 duration-700" width={300} layout="fixed" src="../images/teckno.JPG" alt="Homepage of the TecKno website"/>
                    </a>
                    <div class="flex flex-col mx-auto gap-2 m-5 md:w-2/5">
                        <a class="w-fit" href="https://teckno.dell.com" target="_blank">
                            <h2 class="text-green hover:text-green-focus text-2xl">TecKno</h2>
                        </a>
                        <p>EdTech platform with computer science lessons and games for kids.</p>
                        <p>I was responsible for designing, maintaining and developing UI components and games based on stakeholders' requests.</p>
                        <p class="text-white text-xl">Technologies and Skills:</p>
                        <p>- 
                            <span class="text-white hover:text-green"> UI Design and Development</span>, 
                            <span class="text-white hover:text-green"> Game Design and Development</span>, 
                            <span class="text-white hover:text-green"> UX Design</span>, 
                            <span class="text-white hover:text-green"> React</span>,
                            <span class="text-white hover:text-green"> Figma</span>,
                            <span class="text-white hover:text-green"> Gatsby</span>,
                            <span class="text-white hover:text-green"> Material UI</span>, 
                            <span class="text-white hover:text-green"> Phaser</span>,
                            <span class="text-white hover:text-green"> GitLab</span>,
                            <span class="text-white hover:text-green"> Jira</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio