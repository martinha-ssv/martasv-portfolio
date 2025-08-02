import React from 'react';
import {Link} from 'react-router-dom';

import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import TipsAndUpdatesSharpIcon from '@mui/icons-material/TipsAndUpdatesSharp';


export default function NavBar() {
    return (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
            <div className="flex w-fit border-1 border-primary/20 bg-white/10 dark:bg-black/20 px-3 py-1 rounded-full gap-2 backdrop-blur-sm">
                <NavBarIcon icon={<ContactPageRoundedIcon />} target="/aboutme" />
                <NavBarIcon icon={<HomeRoundedIcon />} target="/" />
                <NavBarIcon icon={<TipsAndUpdatesSharpIcon />} target="/portfolio" />
            </div>
        </div>
    );
}

function NavBarIcon({ icon, target }) {
    return (
        <Link to={target}> 
            <span className='text-md duration-300 text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white'>
                {icon}
            </span> 
        </Link>
    )
}