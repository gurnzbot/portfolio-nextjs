"use client";

import { useEffect, useState } from "react";

type Props = {
    text: string;
};

function ComputerWritingAnimation({ text }: Props) {
    const [writtenText, setWrittenText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const t = setTimeout(() => {
                setWrittenText(prev => (prev += text[index]));
                setIndex(prev => prev + 1);
            }, 150);

            return () => clearTimeout(t);
        }
    }, [text, index]);

    return (
        <div className="flex align-bottom text-xl font-inconsolata text-amber-300 text-center">
            <span className="line-clamp-1">{writtenText}</span>
            <div className="inline-flex h-[1.4em] w-1 bg-slate-300 ml-1 animate-cursor" />
        </div>
    );
}

export default ComputerWritingAnimation;
