import ComputerWritingAnimation from "@/src/components/ComputerWritingAnimation";

function Intro() {
    return (
        <div id="intro" className="flex flex-1 min-h-screen h-[800px] snap-start">
            <div className="flex flex-1 flex-col justify-center items-center text-white bg-intro bg-center bg-cover">
                <div className="flex w-full flex-col justify-center items-center bg-black/60 py-4 px-4">
                    <ComputerWritingAnimation text={`console.log("Hello world!");`} />
                    <h1 className="font-bold text-5xl md:text-5xl lg:text-8xl text-center py-4 xs:py-0">I&apos;m Erik Gurney</h1>
                    <div className="tracking-widest text-orange-600 font-light text-center text-lg">Frontend | React | Backend</div>
                </div>
            </div>
        </div>
    );
}

export default Intro;