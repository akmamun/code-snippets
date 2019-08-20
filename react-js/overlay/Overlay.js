import React from 'react';
import styles from "./Overlay.module.css"; 

const Overlay = ({children, className, show, close}) => (
    <div className={styles.overlay + " " + className} style={{display: show ? 'block' : 'none'}}>
        <div className={styles.content}>
        <span className={styles.closeButton} onClick={close}>
            &times;
        </span>

        {children}
        </div>
    </div>
);
export default Overlay;

