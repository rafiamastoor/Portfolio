import styles from './home.module.css';
import { FaLinkedin } from 'react-icons/fa';

function Home() {
  return (
    <div className={styles.wrapper}>   
      <main className={styles.main}> 
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

export default Home;

