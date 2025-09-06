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
                <p className={styles.labelText}>HTML - CSS - JavaScript</p>
                <p className={styles.descriptionText}>Webpage: https://stevehunt70.github.io/project_weather_report/
                    Github: https://github.com/stevehunt70/project_weather_report.git</p>
              </div>
              <div className={styles.cardBack}>
                <p className={styles.backText}>A group project to build web application in HTML, CSS, JavaScript that uses openweathermap API to display weather data for any city.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <h2>Note-Taking Application</h2>
                <p className={styles.labelText}>HTML - CSS - JavaScript</p>
                <p className={styles.descriptionText}>Webpage: https://notetakingfullstackapplication.onrender.com/
                    Github: https://github.com/rafiamastoor/NoteTakingFullStackApplication.git</p>
              </div>
              <div className={styles.cardBack}>
                <p className={styles.backText}>This web application was built using HTML, CSS, JavaScript and Json for storing notes. User could edit or delete notes as well.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <h2>Portfolio Website</h2>
                <p className={styles.labelText}>React · Responsive Design</p>
                <p className={styles.descriptionText}>Github: https://github.com/rafiamastoor/Portfolio.git</p>
              </div>
              <div className={styles.cardBack}>
                <p className={styles.backText}>Created a personal portfolio showcasing education, experience, projects and skills. Emphasized clean layout, interactive effects, and modular architecture.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <h2>Blog Application</h2>
                <p className={styles.labelText}>HTML - CSS - JavaScript - MySQL</p>
                <p className={styles.descriptionText}>Github: https://github.com/rafiamastoor/BlogApplication.git</p>
              </div>
              <div className={styles.cardBack}>
                <p className={styles.backText}>Developed a simple web application which could allow user to register/login and create blogs. They could see other user's blogs as well.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <h2>Travel Blog Application</h2>
                <p className={styles.labelText}>React - MySQL</p>
                <p className={styles.descriptionText}>Github: https://github.com/JamesBampton/gurus-travel-blog.git</p>
              </div>
              <div className={styles.cardBack}>
                <p className={styles.backText}>A group project to implement travel blog application in react and MySQL. This application also used Multer to store and retrieve images. Users could register/login, create blogs, edit/delete their own blogs, edit/delete comments on any blog and view blogs by categories as well.</p>
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
