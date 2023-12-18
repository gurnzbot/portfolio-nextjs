// * Lib
import { useEffect, useRef } from "react";

// * Utils
import { Section, useScrollStore } from "@/src/store/ScrollStore";

type Props = {
    name: Section;
    threshold?: number;
};

function useSectionObserver({ name, threshold = 0.8 }: Props) {
    const { setActiveSection } = useScrollStore();
    const sectionRef = useRef<HTMLDivElement>(null);

    const options: IntersectionObserverInit = {
        rootMargin: "0px",
        threshold,
    };

    useEffect(() => {
        // Initialize observer, which will set the active section in the store if the section is intersecting
        const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            const [entry] = entries;

            if (entry.isIntersecting) {
                window.location.hash = `#${name}`;
                setActiveSection(name);
            }
        }, options);

        // If there is no ref set, bail!
        if (!sectionRef.current) return;

        // Observe the section in the DOM
        observer.observe(sectionRef.current);

        // Clean up the observer
        return () => {
            observer.disconnect();
        };
    }, [sectionRef.current, setActiveSection]);

    return { sectionRef };
}

export default useSectionObserver;
