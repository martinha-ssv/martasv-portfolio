import React from "react";

export default function Hero() {
    return (
        <div className="flex flex-col gap-4 items-center justify-items-center">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ">
                <img
                src="/self-portrait.svg"
                alt="self portrait"
                className="translate-y-[-5%] w-[160px] md:w-[200px] lg:w-[300px] h-auto transition-transform duration-300 ease-in-out hover:scale-105"
                />
                <div className="flex font-display font-bold text-6xl md:text-7xl lg:text-9xl lg:text-left">
                    <p className="">Hi! I'm <br class="hidden lg:max-xl:block"/><span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary animate-gradient-x">Marta</span>!</p>
                </div>
            </div>   
            <div className="flex flex-col flex-3 justify-text">
                    <p>I am a biomedical engineering student who’s passionate about blending science, technology, and creativity.</p>
                    <p>My work explores everything from brain-computer interfaces and cognitive neuroscience to signal processing and immersive VR experiences.</p>
                    <p>I love tackling real-world challenges and bringing innovative ideas to life, whether it’s designing human-centered tech or diving deep into the brain’s inner workings. </p>
                    <p>Take a look around and join me on this journey into the future of health, tech, and human potential!</p>
                </div>
        </div>
    );
}
