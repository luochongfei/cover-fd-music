import { motion, useScroll, useTransform } from 'framer-motion';
import './FooterIntro.css';

export default function FooterIntro() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div>
            <motion.div className="footer-intro" style={{ opacity: opacity }}>
                <p>
                    Feed is an intelligent property rights and payments
                    platform, using intelligent software and digital security
                    that goes well beyond &apos;military-grade&apos; to give
                    users true ownership of their data and IP.
                </p>
                <p>
                    Feed facilitates trusted exchanges of &apos;users&apos;
                    progressively-perfecting data assets with businesses,
                    researchers, and governments in a <b>trusted</b>, audited,
                    and independently verifiable manner; on their own terms and
                    conditions.
                </p>
            </motion.div>
        </div>
    );
}
