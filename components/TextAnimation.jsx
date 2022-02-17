import * as React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { splitString } from '@/utils/index';
import styles from '@/styles/TextAnimation.module.css';

export default function TextAnimation({
    string = "Hey, guess which animation was actually way more of a pain in the arse than I thought it would be. This boiiii. I hope this isn't a foreshadowing of things to come."
}) {
    const container = React.useRef(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, []);

    React.useEffect(() => {
        const element = container.current;
        const textSpan = Array.from(element.querySelectorAll('span'));

        textSpan.forEach(span => {
            gsap.to(
                span,
                {
                    scaleX: 0,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: span,
                        scrub: 0.6,
                        start: 'center 30%',
                        end: 'center 10%',
                        markers: true,
                    }
                }
            );
        });
    }, []);

    const newitems = splitString(20, string).map((string, idx) => {
        return (
            <div className={styles.text} key={idx}>
                {string}
                <span className={styles.textoverlay}></span>
            </div>
        );
    });

    return (
        <div className={styles.container} ref={container}>
            {newitems}
        </div>
    )
}
