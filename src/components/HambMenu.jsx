import { useState, useEffect } from 'react';
import { useAnimate, stagger } from 'framer-motion';
import './HambMenu.css';

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(
            '.menu-panel',
            {
                display: isOpen ? 'flex' : 'none',
                opacity: isOpen ? 1 : 0,
            },
            {
                type: 'spring',
                duration: 0.3,
                delay: isOpen ? 0 : 0.5,
            }
        );

        animate(
            'li',
            isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 },
            {
                duration: 0.5,
                delay: isOpen ? staggerMenuItems : 0,
            }
        );
    }, [animate, isOpen]);

    return scope;
}

export default function HambMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const scope = useMenuAnimation(isOpen);

    return (
        <nav className="menu-wrap" ref={scope}>
            <a
                className={`menu-btn ${isOpen ? 'menu-btn-close' : ''}`}
                href="#"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="menu-btn-inner"></span>
            </a>
            <ul className="menu-panel">
                <li>INTRODUCING FEED</li>
                <li>FEED APP</li>
                <li>MEET THE TEAM</li>
                <li>SCHEDULE A MEETING</li>
                <li>SEE THE LIVE PROTOTYPE</li>
            </ul>
        </nav>
    );
}
