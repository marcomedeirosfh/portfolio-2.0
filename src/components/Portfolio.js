import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Portfolio = () => {
    return (
        <section class="bg-dark-blue py-10 md:py-20 text-light-blue">
            <div class="w-4/5 max-w-7xl mx-auto flex flex-col gap-10" >
                <h2 class="text-2xl text-green-focus">Portfolio</h2>
                <div class="flex flex-col pb-8 md:flex-row mx-auto gap-2 items-center border-b">
                    <a class="bg-green w-fit h-fit mx-auto" href="https://teckno.dell.com" target="_blank" rel="noreferrer">
                        <StaticImage class="grayscale opacity-40 hover:opacity-100 hover:grayscale-0 duration-700" width={300} layout="fixed" src="../images/teckno.JPG" alt="Homepage of the TecKno website"/>
                    </a>
                    <div class="flex flex-col mx-auto gap-2 m-5 md:w-2/5">
                        <a class="w-fit" href="https://teckno.dell.com" target="_blank" rel="noreferrer">
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

                <div class="flex flex-col md:flex-row mx-auto gap-2 items-center">
                    <div class="flex flex-col mx-auto gap-2 m-5 md:w-2/5">
                        <a class="w-fit" href="https://teckno.dell.com" target="_blank" rel="noreferrer">
                            <h2 class="text-green hover:text-green-focus text-2xl">Github Explorer</h2>
                        </a>
                        <p>React App that uses the Github API to search repositories and their data.</p>
                        <p>Search repository, view details, go to repository page and save recently seearched repositories via LocalStorage.</p>
                        <p class="text-white text-xl">Technologies and Skills:</p>
                        <p>- 
                            <span class="text-white hover:text-green"> UI Development</span>,
                            <span class="text-white hover:text-green"> React</span>,
                            <span class="text-white hover:text-green"> TypeScript</span>, 
                            <span class="text-white hover:text-green"> Axios</span>, 
                            <span class="text-white hover:text-green"> Consuming APIs</span>.
                        </p>
                    </div>

                    <a class="bg-green w-fit h-fit mx-auto" href="https://confident-noether-0c8bcf.netlify.app/" target="_blank" rel="noreferrer">
                        <StaticImage class="grayscale opacity-40 hover:opacity-100 hover:grayscale-0 duration-700" width={300} layout="fixed" src="../images/ghexplorer.JPG" alt="Homepage of the TecKno website"/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Portfolio