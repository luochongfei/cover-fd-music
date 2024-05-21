import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function UScroll() {
    const box1 = useRef(null);

    const h21 = useRef(null);
    const { scrollYProgress } = useScroll({
        target: h21,
        offset: ['start start', 'start end'],
    });
    const opacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
    const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 0]);

    const h22 = useRef(null);
    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: h22,
        offset: ['start start', 'start end'],
    });
    const opacity2 = useTransform(scrollYProgress2, [0, 0.3, 1], [0, 1, 0]);
    const scale2 = useTransform(scrollYProgress2, [0, 0.5, 1], [1, 1.5, 0]);

    return (
        <>
            <div className="box1" ref={box1}>
                <motion.h2
                    className="ppp"
                    ref={h21}
                    style={{
                        opacity: opacity1,
                        scale: scale1,
                    }}
                >
                    When you want something,
                </motion.h2>
                <motion.h2
                    className="ppp"
                    ref={h22}
                    style={{
                        opacity: opacity2,
                        scale: scale2,
                    }}
                >
                    all the universe conspires
                </motion.h2>
            </div>
        </>
    );
}
