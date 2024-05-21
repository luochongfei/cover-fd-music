import { motion, useScroll } from 'framer-motion';
import './MainNav.css';

export default function MainNav(containerRef) {
    const { scrollYProgress: NavProgress1 } = useScroll({
        container: containerRef,
    });

    return (
        <ul className="main-nav">
            <li>
                Introduction
                <span className="progress-item">
                    <motion.em
                        style={{
                            scaleX: NavProgress1,
                        }}
                    ></motion.em>
                </span>
            </li>
            <li>The Technology</li>
            <li>Tech Spotlight</li>
            <li>WHY MUSIC?</li>
        </ul>
    );
}
