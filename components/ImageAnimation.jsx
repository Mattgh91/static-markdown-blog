import * as React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function ImageAnimation() {
    const container = React.useRef(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, []);

    React.useEffect(() => {
        const element = container.current;
        const images = Array.from(element.querySelectorAll('img'));

        images.forEach((image, i) => {
            const shouldPin = (i === (images.length - 1));

            ScrollTrigger.create({
                trigger: image,
                start: 'top top',
                pin: !shouldPin,
                pinSpacing: false,
                invalidateOnRefresh: true,
            });
        });
    }, []);

    return (
        <div ref={container}>
            <img src="/images/posts/img7.jpg" alt="" />
            <img src="/images/posts/img6.jpg" alt="" />
            <img src="/images/posts/img5.jpg" alt="" style={{ position: 'relative', }} />
        </div>
    );
}
