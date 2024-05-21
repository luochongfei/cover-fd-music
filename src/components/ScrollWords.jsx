import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ScrollWords.css';

export default function ScrollWords(containerRef) {
    const targetRef01 = useRef(null);
    const arrProgress = [0, 0.45, 1];
    const arrOpacitys = [0, 1, 0];
    const arrScales = [1.3, 1, 0.5];
    const arrOffsets = ['start 0.1', 'start 0.9'];

    const { scrollYProgress: scrollYProgress01 } = useScroll({
        container: containerRef,
        target: targetRef01,
        offset: arrOffsets,
    });
    const opacity01 = useTransform(scrollYProgress01, arrProgress, arrOpacitys);
    const scale01 = useTransform(scrollYProgress01, arrProgress, arrScales);

    const targetRef02 = useRef(null);
    const { scrollYProgress: scrollYProgress02 } = useScroll({
        container: containerRef,
        target: targetRef02,
        offset: arrOffsets,
    });
    const opacity02 = useTransform(scrollYProgress02, arrProgress, arrOpacitys);
    const scale02 = useTransform(scrollYProgress02, arrProgress, arrScales);

    const targetRef03 = useRef(null);
    const { scrollYProgress: scrollYProgress03 } = useScroll({
        container: containerRef,
        target: targetRef02,
        offset: arrOffsets,
    });
    const opacity03 = useTransform(scrollYProgress03, arrProgress, arrOpacitys);
    const scale03 = useTransform(scrollYProgress02, arrProgress, arrScales);

    const targetRef04 = useRef(null);
    const { scrollYProgress: scrollYProgress04 } = useScroll({
        container: containerRef,
        target: targetRef04,
        offset: arrOffsets,
    });
    const opacity04 = useTransform(scrollYProgress04, arrProgress, arrOpacitys);
    const scale04 = useTransform(scrollYProgress04, arrProgress, arrScales);

    const targetRef05 = useRef(null);
    const { scrollYProgress: scrollYProgress05 } = useScroll({
        container: containerRef,
        target: targetRef05,
        offset: arrOffsets,
    });
    const opacity05 = useTransform(scrollYProgress05, arrProgress, arrOpacitys);
    const scale05 = useTransform(scrollYProgress05, arrProgress, arrScales);

    const [videoWidth] = useState(window.innerWidth);

    return (
        <>
            <div
                className="video-container"
                style={{ position: 'fixed', top: 0 }}
            >
                <video
                    src="/intro.mp4"
                    autoPlay
                    loop
                    muted
                    style={{ width: videoWidth, height: 'auto' }}
                ></video>
            </div>
            <div className="words-wrap">
                <motion.p
                    style={{
                        opacity: opacity01,
                        scale: scale01,
                        transform: 'translate3d(0, 0, 0)',
                    }}
                    ref={targetRef01}
                >
                    When you want something,
                </motion.p>

                <motion.p
                    style={{
                        opacity: opacity02,
                        scale: scale02,
                        transform: 'translate3d(0, 0, 0)',
                    }}
                    ref={targetRef02}
                >
                    all the universe conspires
                </motion.p>

                <motion.p
                    style={{
                        opacity: opacity03,
                        scale: scale03,
                        transform: 'translate3d(0, 0, 0)',
                    }}
                    ref={targetRef03}
                >
                    in helping you to achieve it.
                </motion.p>

                <motion.p
                    style={{
                        opacity: opacity04,
                        scale: scale04,
                        transform: 'translate3d(0, 0, 0)',
                    }}
                    ref={targetRef04}
                >
                    <strong>Paulo Coelho</strong>
                </motion.p>

                <motion.p
                    style={{
                        opacity: opacity05,
                        scale: scale05,
                        transform: 'translate3d(0, 0, 0)',
                    }}
                    ref={targetRef05}
                >
                    Feed is that conspiracy:
                </motion.p>

                <motion.p
                    style={{
                        opacity: opacity05,
                        scale: scale05,
                        transform: 'translate3d(0, 0, 0)',
                    }}
                    ref={targetRef05}
                >
                    the conspiracy of trust.
                </motion.p>

                <motion.p
                    style={{
                        marginTop: '3em',
                        opacity: opacity05,
                        scale: scale05,
                        transform: 'translate3d(0, 0, 0)',
                    }}
                    ref={targetRef05}
                >
                    Trust is the single
                </motion.p>
            </div>
        </>
    );
}
