// * Components
import CompanyTitle from "@/src/components/sections/Experience/CompanyTitle";
import WorkDescription from "./Experience/WorkDescription";
import WorkIcon from "./Experience/WorkIcon";
import WorkSection from "./Experience/WorkSection";
import WorkTitle from "./Experience/WorkTitle";

function Experience() {
    return (
        <div id="experience" className="flex flex-1 justify-center min-h-screen py-20 px-14 sm:px-32 snap-start bg-slate-100">
            <div className="flex flex-col gap-8 max-w-6xl">
                <div>
                    <h5 className="text-3xl text-center text-amber-600 font-bold uppercase">My Experience</h5>
                    <h1 className="font-inconsolata text-lg text-center text-slate-600 tracking-tighter">All 10+ Years Of it...</h1>
                </div>

                <div className="text-lg text-slate-800 leading-8 text-center xs:text-justify">Come with me an a journey from a sole-programmer developing completely custom PHP websites from scratch for a wide variety of clients, to a Wordpress Developer creating custom plugins as part of a fullfillment team. All along the adventure, making dedicated stops as a React developer creating internal IP and Saas-focused projects, and even working on a highly-stylized mobile app with React Native. Lately I've been blessed as a Team Lead, mentoring a team of wonderful developers along the Agile path.</div>

                <div className="relative flex flex-col gap-16 pl-20 timeline:pl-0 before:contents-[''] before:absolute before:left-6 timeline:before:left-auto timeline:before:right-1/2 timeline:before:mr-[7px] before:top-0 before:bottom-0 before:border-l-2 before:border-slate-500">
                    <WorkSection>
                        <WorkIcon />
                        <WorkTitle title="Web Developer &ndash; Team Lead" timePeriod="2019 &ndash; current" />

                        <WorkDescription>
                            <CompanyTitle>Clear Com Media</CompanyTitle>
                            <div>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</div>
                        </WorkDescription>
                    </WorkSection>

                    <WorkSection>
                        <WorkIcon />
                        <WorkTitle title="Web Developer" timePeriod="2009 &ndash; 2019" />

                        <WorkDescription>
                            <CompanyTitle>Digital Media</CompanyTitle>
                            <div>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</div>
                        </WorkDescription>
                    </WorkSection>
                </div>
            </div>
        </div>
    );
}

export default Experience;
