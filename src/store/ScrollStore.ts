import { create } from "zustand";

export type Section = "intro" | "about" | "experience" | "contact";

type State = {
    activeSection: Section;
    setActiveSection: (state: Section) => void;
};

export const useScrollStore = create<State>(set => ({
    activeSection: "intro",
    setActiveSection: section =>
        set(_ => ({
            activeSection: section,
        })),
}));
