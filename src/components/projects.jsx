import styles from './sections.module.css';
import { FaLinkedin } from 'react-icons/fa';

function Project() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.sectionContainer}>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <h2>Weather Application</h2>
                <p>HTML - CSS - JavaScript</p>
                <p>Webpage: https://stevehunt70.github.io/project_weather_report/
                    Github: https://github.com/stevehunt70/project_weather_report.git</p>
              </div>
              <div className={styles.cardBack}>
                <p>A group project to build web application in HTML, CSS, JavaScript that uses openweathermap API to display weather data for any city.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <h2>Note-Taking Application</h2>
                <p>HTML - CSS - JavaScript</p>
                <p>Webpage: https://notetakingfullstackapplication.onrender.com/
                    Github:https://github.com/rafiamastoor/NoteTakingFullStackApplication.git</p>
              </div>
              <div className={styles.cardBack}>
                <p>This web application was built using HTML, CSS, JavaScript and Json for storing notes. User could edit or delete notes as well.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <h3>Portfolio Website</h3>
                <p>React · Responsive Design · Animation</p>
              </div>
              <div className={styles.cardBack}>
                <p>Created a personal portfolio showcasing projects and skills. Emphasized clean layout, interactive effects, and modular architecture.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <h3>UI Component Library</h3>
                <p>Reusable · Scalable · Styled</p>
              </div>
              <div className={styles.cardBack}>
                <p>Developed a set of reusable React components with scoped styling and responsive behavior. Focused on consistency and accessibility.</p>
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

export default Project;
