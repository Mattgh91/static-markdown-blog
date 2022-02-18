import React from 'react';
import styles from '@/styles/Cursor.module.css';

export default function CursorAnimation() {
    const cursor = React.useRef(null);
    const [cursorClasses, setCursorClasses] = React.useState(`${styles.cursorcontainer}`);

    React.useEffect(() => {
        const moveCursor = (e) => {
            const mouseY = e.clientY;
            const mouseX = e.clientX;

            cursor.current?.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        }

        window.addEventListener('mousemove', moveCursor);
    }, []);

    React.useEffect(() => {
        const a = [...document.querySelectorAll('a'), ...document.querySelectorAll('.cursor-pointer')];

        a.forEach(item => {
            item.addEventListener('mouseover', () => {
                setCursorClasses(`${styles.cursorcontainer} ${styles.hover}`)
            });
            item.addEventListener('mouseleave', () => {
                setCursorClasses(`${styles.cursorcontainer}`)
            });
        })
    }, []);

    return (
        <div className={cursorClasses} ref={cursor}> </div>
    )
}
