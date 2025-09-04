import styles from './sections.module.css';

function Experience() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.sectionContainer}>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <h3>Frontend Developer</h3>
                <p>2023–Present</p>
                <p>Travel Blog App</p>
              </div>
              <div className={styles.cardBack}>
                <p>Architected a responsive React-based travel blog with modular components, CSS Modules, and dynamic routing. Focused on UI polish and user experience.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <h3>Backend Engineer</h3>
                <p>2023–Present</p>
                <p>Financial Portal</p>
              </div>
              <div className={styles.cardBack}>
                <p>Built secure login and session handling using Sequelize and MySQL. Integrated Sage APIs to generate user-facing financial statements with persistent data models.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <h3>UI/UX Designer</h3>
                <p>2022–2023</p>
                <p>Portfolio Site</p>
              </div>
              <div className={styles.cardBack}>
                <p>Designed and styled a personal portfolio with interactive effects, responsive layout, and modular architecture. Emphasized clarity, aesthetics, and usability.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <h3>Technical Educator</h3>
                <p>2021–2022</p>
                <p>Education Sector</p>
              </div>
              <div className={styles.cardBack}>
                <p>Delivered coding workshops and mentored students in web development fundamentals. Focused on hands-on learning and iterative problem-solving.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 Rafia Mastoor. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Experience;

