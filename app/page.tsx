// * Components
import Intro from "@/src/components/sections/Intro";
import About from "@/src/components/sections/About";
import Navigation from "@/src/components/nav/Navigation";

export default function Home() {
    return (
        <main className="flex flex-col flex-1 min-h-screen min-w-[300px] scroll-smooth">
            <Navigation />
            <Intro />
            <About />
        </main>
    );
}
