import { React } from "react";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Email from '@mui/icons-material/Email';


import Button from './Button.jsx';

export default function Hero() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[auto_1fr] gap-4 gap-x-10 items-center justify-items-center max-w-[calc(100%-6rem)] mx-auto mt-15">
            <div className="font-display font-bold text-5xl md:text-7xl lg:text-9xl lg:text-left md:max-w-[calc(100%)] lg:col-span-1 lg: row-span-2 lg:justify-self-start">
            <p className="text-nowrap">Hi <span className='inline-block transition-transform duration-300 hover:rotate-[-10deg] waving-hand'>👋</span> <br className="max-xl:block"/> I'm <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary animate-gradient-x">Marta</span>!</p>
            </div>
            <img
            src="/self-portrait.svg"
            alt="self portrait"
            className="translate-y-[-5%] w-[160px] md:w-[200px] lg:w-[270px] h-auto lg:col-span-1 lg:justify-self-end"
            />
            <div className="text-xl font-medium text-left max-w-[calc(theme(maxWidth.md))] lg:max-w-none lg:col-span-2">
                <p>I'm studying <span className="underline decoration-secondary decoration-2 underline-offset-2">Neuroengineering</span> @ EPFL, dreaming of <span className="underline decoration-primary decoration-2 underline-offset-2">innovating</span> and excited to share what I learn along the way.</p>
            </div>

            <div className="lg:col-span-2 p-2 flex flex-col gap-1">
                <p className="font-bold">Let's connect!</p>
                <div className="flex justify-center gap-4">
                    <SocialIcon href="https://www.linkedin.com/in/martasofiavasconcelos/" Icon={LinkedInIcon} />
                    <SocialIcon href="https://www.github.com/martinha-ssv" Icon={GitHubIcon} />
                    <SocialIcon href="https://www.instagram.com/martinha.ssv/" Icon={InstagramIcon} />
                </div>
                <div className='mt-4'>
                  <a href="mailto:martasofiavasconcelos@gmail.com">
                    <Button variant="outlined" className='text-lg flex items-center gap-2'>
                      <Email fontSize="inherit" />
                      Reach out!
                    </Button>
                  </a>
                </div>
            </div>


        </div>
    );
}

function SocialIcon({ href, Icon }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
            <span className="text-2xl text-black dark:text-white transition-colors duration-300 ease-in-out hover:text-accent">
                <Icon />
            </span>
        </a>
    )
}