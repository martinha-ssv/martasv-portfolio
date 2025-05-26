import React from "react";

export default function Hero() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[auto_fit-content] gap-4 items-center justify-items-center m-">
            <div className="font-display font-bold text-5xl md:text-7xl lg:text-9xl lg:text-left md:max-w-[calc(100%)] lg:col-span-1 lg:justify-self-start">
            <p className="">Hi 👋 <br class="max-xl:block"/> I'm <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary animate-gradient-x">Marta</span>!</p>
            </div>
            <img
            src="/self-portrait.svg"
            alt="self portrait"
            className="translate-y-[-5%] w-[160px] md:w-[200px] lg:w-[300px] h-auto transition-transform duration-300 ease-in-out hover:scale-105 lg:col-span-1 lg:justify-self-end"
            />
            <div className="flex flex-col text-xl flex-3 text-left w-[80%] md:max-w-[calc(theme(maxWidth.md))] lg:col-span-2">
                <p>I'm a biomedical engineering student, blending science and creativity to push health tech forward.</p>
            </div>
        </div>
    );
}
