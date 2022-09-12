import { DateTime } from 'luxon';
import styles from './terminal.module.css';

const Terminal: React.FC = () => (
  <div className={`${styles.terminal} text-sm md:text-2xl`}>
    <div className={styles.fakeMenu}>
      <div className={`${styles.fakeButtons} ${styles.fakeClose}`}></div>
      <div className={`${styles.fakeButtons} ${styles.fakeMinimize}`}></div>
      <div className={`${styles.fakeButtons} ${styles.fakeZoom}`}></div>
    </div>
    <div className={styles.fakeScreen}>
      <p suppressHydrationWarning>
        Last login: {DateTime.local().toHTTP()} on ttys000
      </p>
      <p id="greeting" className={styles.typeText}>
        $ Good{' '}
        {DateTime.local().toObject().hour < 12
          ? `morning`
          : DateTime.local().toObject().hour < 16
          ? 'afternoon'
          : `evening`}
        .
      </p>
      <p className={styles.typeText}>$ I am Tom, a Web Developer</p>
      <p className={styles.typeText}>$ &amp; Broadcast Engineer.</p>
      <p className={styles.typeText}>
        $ Find out more about me below...&#9608;
      </p>
    </div>
  </div>
);

export default Terminal;
