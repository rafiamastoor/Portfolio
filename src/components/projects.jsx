import styles from './sections.module.css';

function Project() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.sectionContainer}>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <h3>Travel Blog App</h3>
                <p>React · CSS Modules · Vite</p>
              </div>
              <div className={styles.cardBack}>
                <p>Designed a responsive travel blog with modular components, dynamic routing, and polished UI. Focused on user experience and visual storytelling.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <h3>Financial Statement Portal</h3>
                <p>Node.js · Sequelize · Sage API</p>
              </div>
              <div className={styles.cardBack}>
                <p>Built a secure portal for generating user-facing financial reports. Implemented authentication, session handling, and backend modeling with MySQL.</p>
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
        <p>© 2025 Rafia Mastoor. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Project;
