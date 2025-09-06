import styles from './activities.module.css';
import { FaLinkedin } from 'react-icons/fa';

function Activities() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.sectionContainer}>
        
        <div className={styles.cardGrid}>
          {/* Activity 1 */}
          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <img src="assets/activity1.jpg" alt="Activity 1" className={styles.image} />
              </div>
              <div className={styles.cardBack}>
                <p className={styles.backText}>Love to do adventure sports like I did paragliding in Interlaken (Switzerland)</p>
              </div>
            </div>
          </div>

          {/* Activity 2 */}
          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <img src="/assets/activity2.jpg" alt="Activity 2" className={styles.image} />
              </div>
              <div className={styles.cardBack}>
                <p className={styles.backText}>Enjoy thrills like hot air balloon ride over Midlands.</p>
              </div>
            </div>
          </div>

          {/* Activity 3 */}
          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <img src="/assets/activity3.jpg" alt="Activity 3" className={styles.image} />
              </div>
              <div className={styles.cardBack}>
                <p className={styles.backText}>Enjoy visiting places with my kids like zoos, theme parks and water parks etc.</p>
              </div>
            </div>
          </div>

          {/* Activity 4 */}
          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <img src="/assets/activity4.jpg" alt="Activity 4" className={styles.image} />
              </div>
              <div className={styles.cardBack}>
                <p className={styles.backText}>Travelling and exploring-Have been to Turkey, Morroco, Switzerland, Egypt, Netherlands, Belgium, Wales and Scotland....</p>
              </div>
            </div>
          </div>
          
        </div>
      </main>

      <footer className={styles.footer}>
              <a
                  href="https://www.linkedin.com/in/rafia-mastoor-545573331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
              >
                  <FaLinkedin className={styles.socialIcon} />
                  <span className={styles.socialText}>Connect on LinkedIn</span>
              </a>
            </footer>
    </div>
  );
}

export default Activities;
