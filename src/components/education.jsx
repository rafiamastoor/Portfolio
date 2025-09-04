import styles from './sections.module.css';

function Education() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.sectionContainer}>
          <div className={styles.cardGrid}>
                <div className={styles.card}>
                  <div className={styles.cardInner}>
                    <div className={styles.cardFront}>
                      <h3>University of Leicester</h3>
                      <p>2018–2022</p>
                      <p>BSc Computer Science</p>
                    </div>
                    <div className={styles.cardBack}>
                      <p>Graduated with First Class Honours. Focused on full-stack development, UI/UX design, and backend modeling. Final year project: Travel blog app prototype.</p>
                    </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardInner}>
                    <div className={styles.cardFront}>
                      <h3>University of Leicester</h3>
                      <p>2018–2022</p>
                      <p>BSc Computer Science</p>
                    </div>
                    <div className={styles.cardBack}>
                      <p>Graduated with First Class Honours. Focused on full-stack development, UI/UX design, and backend modeling. Final year project: Travel blog app prototype.</p>
                    </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardInner}>
                    <div className={styles.cardFront}>
                      <h3>University of Leicester</h3>
                      <p>2018–2022</p>
                      <p>BSc Computer Science</p>
                    </div>
                    <div className={styles.cardBack}>
                      <p>Graduated with First Class Honours. Focused on full-stack development, UI/UX design, and backend modeling. Final year project: Travel blog app prototype.</p>
                    </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardInner}>
                    <div className={styles.cardFront}>
                      <h3>University of Leicester</h3>
                      <p>2018–2022</p>
                      <p>BSc Computer Science</p>
                    </div>
                    <div className={styles.cardBack}>
                      <p>Graduated with First Class Honours. Focused on full-stack development, UI/UX design, and backend modeling. Final year project: Travel blog app prototype.</p>
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

export default Education;
