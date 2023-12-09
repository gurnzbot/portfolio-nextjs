// * Lib
import Image from "next/image";
import { FaGithub, FaStackOverflow } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

// * Components
import ContactLink from "@/src/components/sections/About/ContactLink";

function About() {
    return (
        <div id="about" className="flex min-h-screen py-20 px-14 sm:px-32 justify-center snap-start">
            <div className="flex flex-1 flex-col gap-4 max-w-6xl overflow-hidden">
                <div className="flex flex-col justify-center">
                    <h5 className="text-3xl text-center text-amber-600 font-bold uppercase">About</h5>
                    <h1 className="font-inconsolata text-3xl sm:text-5xl text-center text-slate-600 tracking-tighter">Attention, humans!</h1>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex lg:w-1/6 min-w-[100px] lg:min-w-[150px] lg:pt-28 justify-center items-start">
                        <Image className="w-[150px] lg:w-full rounded-[100%] overflow-hidden bg-cover border-2 border-slate-500" src="/images/erik-avatar.jpg" alt="Erik GUrney" width={215} height={215} />
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col gap-4 pt-6 text-xl text-slate-500 leading-8 text-center xs:text-justify">
                            <div>My name is Erik Gurney. I&apos;m an experienced web developer based in Essex Ontario, Canada. I excel at the frontend UI/UX experience, and I thoroughly enjoy ensuring the user has a great experience. I&apos;m no stranger to the backend and the full-stack experience, having done it for 10+ years ;&#41;</div>
                            <div>Besides all that, I really enjoy the musical side of life, playing some Zelda, and thoroughly embarrasing my wife and 2 kids.</div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-10 text-slate-600 mt-12">
                            <div className="flex lg:w-1/2 flex-col gap-4">
                                <h3 className="w-full font-inconsolata font-bold text-2xl text-slate-900">My Contact Info</h3>

                                <div className="flex flex-col gap-4 over">
                                    <div>
                                        <label className="text-lg font-bold">Email:</label>
                                        <ContactLink Icon={MdOutlineEmail} href="mailto:erik.gurney@hotmail.com">
                                            erik.gurney@hotmail.com
                                        </ContactLink>
                                    </div>
                                    <div>
                                        <label className="text-lg font-bold">Portfolio:</label>
                                        <ContactLink Icon={TbWorld}>erikgurney.com</ContactLink>
                                    </div>
                                    <div>
                                        <label className="text-lg font-bold">Github:</label>
                                        <ContactLink Icon={FaGithub} href="https://github.com/gurnzbot" target="blank">
                                            github.com/gurnzbot
                                        </ContactLink>
                                    </div>
                                    <div>
                                        <label className="text-lg font-bold">Stackoverflow:</label>
                                        <ContactLink Icon={FaStackOverflow} href="https://stackoverflow.com/users/1803539/gurnzbot">
                                            stackoverflow.com/users/1803539/gurnzbot
                                        </ContactLink>
                                    </div>
                                </div>
                            </div>

                            {/* TODO: make this more interesting */}
                            <div className="flex lg:w-1/2 flex-col gap-4">
                                <h3 className="w-full font-inconsolata font-bold text-2xl text-slate-900">My Skillset</h3>

                                <div className="flex flex-col gap-1">
                                    <div>Typescript</div>
                                    <div>Javascript</div>
                                    <div>React</div>
                                    <div>React Native</div>
                                    <div>MySQL</div>
                                    <div>PHP</div>
                                    <div>Node.js</div>
                                    <div>Wordpress</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 mt-12">
                            <a href="#contact" className="flex flex-1 md:min-w-[210px] lg:min-w-[250px] md:flex-initial items-center justify-center text-center px-10 py-3 font-bold text-amber-500 rounded-lg border-2 border-amber-500 hover:border-amber-600 hover:text-amber-600 hover:bg-amber-50 active:scale-110 duration-100 ease-in-out">
                                Hire Me!
                            </a>
                            <a href="/downloads/Erik%20Gurney%20-%202023.pdf" download="Erik Gurney.pdf" className="flex flex-1 md:min-w-[210px] lg:min-w-[250px] md:flex-initial items-center justify-center text-center px-10 py-3 font-semibold text-white rounded-lg bg-amber-500 hover:bg-amber-600 active:scale-110 duration-100 ease-in-out">
                                Download my Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
