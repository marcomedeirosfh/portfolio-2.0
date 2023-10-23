import React from "react";
import MarcoMedeiros from '../assets/Marco-Medeiros.pdf'

const About = () => {
    return (
        <section class="bg-dark-blue py-10 text-light-blue">
            <div class="w-4/5 max-w-7xl mx-auto flex flex-col gap-10">
                <div class="flex flex-col md:flex-row justify-between text-2xl text-green-focus items-center">
                    <h2>About Me</h2>
                    <a class="text-xl text-white hover:text-green-focus" href={MarcoMedeiros} download >Download CV</a>
                </div>
                <div class="flex flex-col gap-5 px-5">
                    <p><span class="text-white">Passionate about technology</span> since a young age, I have always been immersed on the internet and geek culture.
                        The exposure and familiarity with different devices and applications motivated me to apply that knowledge and experience 
                        to <span class="text-white">build products that are good for both users and stakeholders</span>.</p>
                    <p>I believe that <span class="text-white">solving problems</span> is more important than specific tools, so even though I’m more familiar with <span class="text-white">React</span> and <span class="text-white">Figma</span>, 
                        I’m an adept of <span class="text-white">continuous learning</span> and always willing to learn new skills as needed.</p>
                </div>
                <div class="flex flex-col lg:flex-row md:justify-between gap-10">
                    <div class="flex flex-col gap-5 lg:w-3/5">
                        <h2 class="text-2xl text-green-focus">Experience</h2>
                        <div class="flex flex-col gap-10">
                            <div class="flex flex-col gap-2 px-5">
                                <div>
                                    <p class="text-white text-lg">Software Engineer - Contract</p>
                                    <p class="text-sm">at Dell from 06/2022 to present</p>
                                    <a class="text-lg text-green hover:text-green-focus" href="https://teckno.dell.com" target="_blank" rel="noreferrer">TecKno</a>
                                </div>
                                <ul class="flex flex-col gap-2">
                                    <li>
                                        <p>- Designed and developed UI components and games based on stakeholders' requests.</p>
                                    </li>
                                    <li>
                                        <p>- 
                                            <span class="text-white hover:text-green"> React JS</span>, 
                                            <span class="text-white hover:text-green"> Figma,</span>
                                            <span class="text-white hover:text-green"> Gatsby,</span>
                                            <span class="text-white hover:text-green"> Material UI,</span> 
                                            <span class="text-white hover:text-green"> Phaser,</span>
                                            <span class="text-white hover:text-green"> GitLab,</span>
                                            <span class="text-white hover:text-green"> Jira.</span>
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div class="flex flex-col gap-2 px-5">
                                <div >
                                    <p class="text-white text-lg">Technical Support Specialist</p>
                                    <p class="text-sm">at Accenture from 11/2021 to 05/2022</p>
                                </div>
                                <ul class="flex flex-col gap-2">
                                    <li>
                                        <p>- Level 2 technical support, investigating troubleshooting, testing and escalating both design and functional bugs and issues.</p>
                                    </li>
                                    <li>
                                        <p>- 
                                            <span class="text-white hover:text-green"> Jira</span>, 
                                            <span class="text-white hover:text-green"> Confluence,</span>
                                            <span class="text-white hover:text-green"> internal bug tracking tools,</span>
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div class="flex flex-col gap-2 px-5">
                                <div >
                                    <p class="text-white text-lg">Quality Assurance Tester</p>
                                    <p class="text-sm">at Keywords Studios from 05/2019 to 06/2021</p>
                                </div>
                                <ul class="flex flex-col gap-2">
                                    <li>
                                        <p>- Testing and reporting linguistic, design and functional bugs and issues in games' user interfaces.</p>
                                    </li>
                                    <li>
                                        <p>- 
                                            <span class="text-white hover:text-green"> Jira</span>, 
                                            <span class="text-white hover:text-green"> Confluence,</span>
                                            <span class="text-white hover:text-green"> internal bug tracking tools,</span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-5 lg:w-2/5">
                        <h2 class="text-2xl text-green-focus">Education</h2>
                        <div class="flex flex-col gap-5 px-5">
                            <div >
                                <p class="text-white text-lg">Web Applications Development</p>
                                <p>Technological University Dublin</p>
                            </div>
                            <div >
                                <p class="text-white text-lg">UX Design</p>
                                <p>UX Design Institute</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About