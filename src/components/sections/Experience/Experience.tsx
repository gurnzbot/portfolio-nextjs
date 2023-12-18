"use client";

// * Components
import CompanyTitle from "@/src/components/sections/Experience/CompanyTitle";
import WorkDescription from "@/src/components/sections/Experience/WorkDescription";
import WorkIcon from "@/src/components/sections/Experience/WorkIcon";
import WorkSection from "@/src/components/sections/Experience/WorkSection";
import WorkTitle from "@/src/components/sections/Experience/WorkTitle";

// * Utils
import useSectionObserver from "@/src/hooks/useSectionObserver";

function Experience() {
    const { sectionRef } = useSectionObserver({ name: "experience", threshold: 0.4 });

    return (
        <div id="experience" ref={sectionRef} className="flex flex-1 justify-center min-h-screen py-20 px-14 sm:px-32 snap-start bg-slate-100">
            <div className="flex flex-col gap-8 max-w-6xl">
                <div>
                    <h5 className="text-3xl text-center text-amber-600 font-bold uppercase">My Experience</h5>
                    <h1 className="font-inconsolata text-lg text-center text-slate-600 tracking-tighter">All 10+ Years Of it...</h1>
                </div>

                {/* prettier-ignore */}
                <div className="text-lg text-slate-800 leading-8 text-center xs:text-justify">
                    Come with me an a journey from a sole-programmer developing completely custom PHP websites from scratch for a wide variety of clients, 
                    expanding my expertise to React, starting anew as a Wordpress Developer, jumping into Laravel with PHP, and even working with React Native recently! 
                    All along the adventure working closely with clients and external teams, creating internal IP and Saas-focused projects, and embracing the ability to bring designs to life. 
                    Lately I&apos;ve had the priveledge of serving as a Team Lead, mentoring a team of wonderful developers along the Agile path.
                </div>

                <div className="relative flex flex-col gap-16 pl-20 timeline:pl-0 before:contents-[''] before:absolute before:left-6 timeline:before:left-auto timeline:before:right-1/2 timeline:before:mr-[7px] before:top-0 before:bottom-0 before:border-l-2 before:border-slate-500">
                    <WorkSection>
                        <WorkIcon />
                        <WorkTitle title="Web Developer &ndash; Team Lead" timePeriod="2019 &ndash; current" />

                        <WorkDescription>
                            <CompanyTitle>Clear Com Media</CompanyTitle>

                            <div className="flex flex-col gap-4 leading-relaxed text-slate-600">
                                <div>I jumped head-first into the world of Wordpress when I began here. The plugins and customizations I wrote covered everything from robust custom layouts with full administration, to external API integration and subscription models.</div>
                                <div>Once the company broadened the scope of work, I brought React to the team and we were off and running! Next.js, Redux, Zustand, Tailwind, Typescript, Nestjs, and React Native all come into play, making going into work a joy :D</div>
                                <div>Not too long after I began, I was given the opportunity to lead the development team. This has been a great part of my career, and it&apos;s a role which I&apos;m looking to continue with.</div>
                            </div>
                        </WorkDescription>
                    </WorkSection>

                    <WorkSection>
                        <WorkIcon />
                        <WorkTitle title="Web Developer" timePeriod="2009 &ndash; 2019" />

                        <WorkDescription>
                            <CompanyTitle>Digital Media</CompanyTitle>
                            <div className="flex flex-col gap-4 leading-relaxed text-slate-600">
                                <div>My development career began here! I was the only developer working on a variety of client websites, built in PHP, vanilla JS, CSS (eventually SCSS) from scratch!</div>
                                <div>I worked alongside a good number of clients and ensured each project was done on time, on budget, and satisfied everyone involved. I developed some great relationships in this role.</div>
                                <div>A true highlight was create a completely custom ecommerce solution starting from zero all the way to deploying it for multiple clients. Frontend React (before Next.js and real tooling), and backend PHP. What a challenge!</div>
                            </div>
                        </WorkDescription>
                    </WorkSection>

                    <WorkSection>
                        <WorkIcon />
                        <WorkTitle title="Simulation Programmer" timePeriod="2006 &ndash; 2008" />

                        <WorkDescription>
                            <CompanyTitle>Nemak</CompanyTitle>
                            <div className="flex flex-col gap-4 leading-relaxed text-slate-600">
                                <div>Fresh out of college, I had the opportunity to develop simulations and provide productivity insight for a sizable engine-block factory.</div>
                                <div>Although not web-development, this time in my career allowed me to see how talented members of a team don&apos;t rely on their abilities alone. They pay great attention to detail and strive hard to improve along the way. These are valuable lessons for a young person, and I continue to pull inspiration from this time.</div>
                            </div>
                        </WorkDescription>
                    </WorkSection>
                </div>
            </div>
        </div>
    );
}

export default Experience;
