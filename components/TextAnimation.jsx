import * as React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from '@/styles/TextAnimation.module.css';

export default function TextAnimation() {
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

    const string = "Hey, guess which animation was actually way more of a pain in the arse than I thought it would be. This boiiii. I hope this isn't a foreshadowing of things to come.";

    const splitString= (n, str) => {
        const arr = str?.split(' ');
        let result = []
        let subStr = arr[0]

        for (let i = 1; i < arr.length; i++) {
            let word = arr[i]
            if (subStr.length + word.length + 1 <= n) {
                subStr = subStr + ' ' + word
            } else {
                result.push(subStr);
                subStr = word
            }
        }

        if (subStr.length) {
            result.push(subStr)
        }

        return result;
    }

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
