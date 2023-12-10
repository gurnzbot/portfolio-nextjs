// * Components
import Intro from "@/src/components/sections/Intro";
import About from "@/src/components/sections/About/About";
import Navigation from "@/src/components/nav/Navigation";
import Experience from "@/src/components/sections/Experience/Experience";
import Contact from "@/src/components/sections/Contact";

export default function Home() {
    return (
        <main
            style={{
                minWidth: "300px",
            }}
            className="flex flex-col flex-1 min-h-screen scroll-smooth snap-y"
        >
            <Navigation />
            <Intro />
            <About />
            <Experience />
            <Contact />
        </main>
    );
}
