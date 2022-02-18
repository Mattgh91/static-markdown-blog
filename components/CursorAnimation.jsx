import React from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Cursor.module.css';

export default function CursorAnimation() {
    const cursor = React.useRef(null);
    const [cursorClasses, setCursorClasses] = React.useState(`${styles.cursorcontainer}`);
    const [currentURL, setCurrentURL] = React.useState('')
    const router = useRouter();

    React.useEffect(() => {
        const handleRouteChange = (url, { shallow }) => {
            setCurrentURL(url);
        }

        router.events.on('routeChangeComplete', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [])

    React.useEffect(() => {
        const moveCursor = (e) => {
            const mouseY = e.clientY;
            const mouseX = e.clientX;

            cursor.current?.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        }

        window.addEventListener('mousemove', moveCursor);
    }, []);

    React.useEffect(() => {
        const links = [
            ...document?.querySelectorAll('a'),
            ...document?.querySelectorAll('.cursor-pointer')
        ];

        links.forEach(item => {
            item.addEventListener('mouseover', () => {
                setCursorClasses(`${styles.cursorcontainer} ${styles.hover}`)
            });
            item.addEventListener('mouseleave', () => {
                setCursorClasses(`${styles.cursorcontainer}`)
            });
        })
    }, [currentURL]);

    return (
        <div className={cursorClasses} ref={cursor}> </div>
    )
}
