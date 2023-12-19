// Note: We could also set the url's hash when the user scrolls to a section, but the DOM wants to auto-scroll the user
//       exactly to the top of the section, which leads to bad UX.  Hence, we aren't doing that.

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

    useEffect(() => {
        const options: IntersectionObserverInit = {
            rootMargin: "0px",
            threshold,
        };

        // Initialize observer, which will set the active section in the store if the section is intersecting
        const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            const [entry] = entries;

            if (entry.isIntersecting) {
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
    }, [setActiveSection, name, threshold]);

    return { sectionRef };
}

export default useSectionObserver;
