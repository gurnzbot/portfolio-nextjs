// * Lib
import { TbCodeDots } from "react-icons/tb";

// * Components

function Experience() {
    return (
        <div id="experience" className="flex flex-1 justify-center min-h-screen py-20 px-14 sm:px-32 snap-start bg-slate-100">
            <div className="flex flex-col gap-8 max-w-6xl">
                <div>
                    <h5 className="text-3xl text-center text-amber-600 font-bold uppercase">My Experience</h5>
                    <h1 className="font-inconsolata text-lg text-center text-slate-600 tracking-tighter">All 10+ Years Of it...</h1>
                </div>

                <div className="text-lg text-slate-800 leading-8 text-center xs:text-justify">Come with me an a journey from a sole-programmer developing completely custom PHP websites from scratch for a wide variety of clients, to a Wordpress Developer creating custom plugins as part of a fullfillment team. All along the adventure, making dedicated stops as a React developer creating internal IP and Saas-focused projects, and even working on a highly-stylized mobile app with React Native. Lately I've been blessed as a Team Lead, mentoring a team of wonderful developers along the Agile path.</div>

                <div className="relative flex flex-col gap-10 before:contents-[''] before:absolute before:right-1/2 before:mr-2 before:top-0 before:bottom-0 before:border-l before:border-black">
                    {/* Work wrapper */}
                    <div className="relative flex flex-col md:flex-row gap-28 justify-between text-slate-800">
                        {/* Icon */}
                        <div className="absolute top-0 right-1/2 -mr-4 flex justify-center items-start">
                            <div className="flex justify-center items-center p-3 rounded-full bg-slate-700 text-white text-2xl">
                                <TbCodeDots />
                            </div>
                        </div>

                        {/* Location & time period */}
                        <div className="flex flex-col md:w-1/2 items-end">
                            <div className="text-xl font-semibold">Web Developer &ndash; Team Lead</div>
                            <div className="text-slate-600">2019 &ndash; current</div>
                        </div>

                        {/* Description */}
                        <div className="md:w-1/2">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</div>
                    </div>

                    {/* Work wrapper */}
                    <div className="relative flex flex-col md:flex-row gap-28 justify-between text-slate-800">
                        {/* Icon */}
                        <div className="absolute top-0 right-1/2 -mr-4 flex justify-center items-start">
                            <div className="flex justify-center items-center p-3 rounded-full bg-slate-700 text-white text-2xl">
                                <TbCodeDots />
                            </div>
                        </div>

                        {/* Location & time period */}
                        <div className="flex flex-col md:w-1/2 items-end">
                            <div className="text-xl font-semibold">Web Developer &ndash; Team Lead</div>
                            <div className="text-slate-600">2019 &ndash; current</div>
                        </div>

                        {/* Description */}
                        <div className="md:w-1/2">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
