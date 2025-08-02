import React from 'react'
import { twMerge } from 'tailwind-merge';

export default function Button({ variant = 'contained', children, className = '', ...props }) {
    const baseStyles = 'text-md font-medium focus:outline-none duration-300 hover:-translate-y-0.5';
    const variantStyles = {
        contained: 'px-3 py-1 rounded-xl bg-primary text-white hover:bg-accent hover:font-semibold border border-white/40',
        outlined: 'px-3 py-1 rounded-xl border border-primary text-primary hover:text-accent hover:border-accent hover:font-semibold',
        text: 'text-primary border-b-3 border-primary/50 hover:border-accent hover:text-accent hover:font-semibold',
    };

    const merged = twMerge(baseStyles, variantStyles[variant], className);

    return (
        <button className={merged} {...props}>
            {children}
        </button>
    );
}