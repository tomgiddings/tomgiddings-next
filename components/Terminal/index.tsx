import { DateTime } from 'luxon';
import styles from './terminal.module.css';

const Terminal: React.FC = () => (
    <div className={`${styles.terminal} text-xs md:text-lg`}>
        <div className={styles.fakeMenu}>
        <div className={`${styles.fakeButtons} ${styles.fakeClose}`}></div>
        <div className={`${styles.fakeButtons} ${styles.fakeMinimize}`}></div>
        <div className={`${styles.fakeButtons} ${styles.fakeZoom}`}></div>
        </div>
        <div className={styles.fakeScreen}>
        <p>Last login: {DateTime.local().toHTTP()} on ttys000</p>
        <p className={styles.typeText}>$ Good {DateTime.local().hour < 12 ? `morning` : DateTime.local().hour < 16 ? 'afternoon' : `evening`}.</p>
        <p className={styles.typeText}>$ I am Tom, a Web Developer &amp; Broadcast Engineer.</p>
        <p className={styles.typeText}>$ Find out more about me below...&#9608;</p>
        </div>
    </div>
);

export default Terminal;