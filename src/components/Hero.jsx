import React from "react";

export default function Hero() {
    return (
        <div className="flex flex-col gap-4 items-center justify-items-cente">  

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center border-accent border-2">
                <img src="/self-portrait.svg" alt="self portrait" className="translate-y-[-5%] w-[160px] md:w-[200px] lg:w-[300px] h-auto transition-transform duration-300 ease-in-out hover:scale-105"/>
                <div className="font-display font-bold text-6xl md:text-7xl lg:text-9xl lg:text-left">
                        Hi! I'm <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary animate-gradient-x">Marta</span>!
                    </div>
            </div>


            <div className="grid grid-cols-[2fr_1fr] gap-8">
                <div className="card rounded-2xl border-1 border-stone-800 p-4">
                   http://localhost:5173/self-portrait.svg <h2 className="font-black">Short bio</h2>
                    <p>Lorem ipsum dolor sit amet</p>A
                </div>
                <div>
                    <p>Check these out!</p>
                </div>
            </div>

        </div>
    );
}

