import ComputerWritingAnimation from "@/components/ComputerWritingAnimation";

export default function Home() {
    return (
        <main className="flex flex-1 min-h-screen">
            <div className="flex flex-1 min-h-screen max-h-[800px] ">
                <div className="flex flex-1 flex-col justify-center items-center text-white bg-intro bg-center bg-cover">
                    <div className="flex w-full flex-col justify-center items-center bg-black/60 py-4 px-10">
                        <ComputerWritingAnimation text={`console.log("Hello world!");`} />
                        <h1 className="font-bold text-8xl">I'm Erik Gurney</h1>
                        <div>Frontend | React | Backend</div>
                    </div>
                </div>
            </div>
        </main>
    );
}
