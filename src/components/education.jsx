import styles from './sections.module.css';
import { FaLinkedin } from 'react-icons/fa';

function Education() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.sectionContainer}>
          <div className={styles.cardGrid}>
                <div className={styles.card}>
                  <div className={styles.cardInner}>
                    <div className={styles.cardFront}>
                      <h2>Level 4 - Full Stack Application Development</h2>
                      <p className={styles.labelText}>Jun'25 - Sep'25</p>
                      <p className={styles.descriptionText}>BCS Certified</p>
                    </div>
                    <div className={styles.cardBack}>
                      <p>Focused on full-stack development, UI/UX design, and backend modeling. Had hands-on experience in building web applications in HTML, CSS, JavaScript and MySQL.</p>
                    </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardInner}>
                    <div className={styles.cardFront}>
                      <h2>Bachelor of Science - Computer Science</h2>
                      <p className={styles.labelText}>1999 - 2003</p>
                      <p className={styles.descriptionText}>National University of Computers & Emerging Sciences, Pakistan</p>
                    </div>
                    <div className={styles.cardBack}>
                      <p>Four year bachelor programme with focus on object oriented programming in C++, Data Structures, databases, advanced maths, algorithms and final project which was Reverse Engineering Decompiler.</p>
                    </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardInner}>
                    <div className={styles.cardFront}>
                      <h2>Level 2-Support Work in Schools</h2>
                      <p className={styles.labelText}>Jan'20 - Mar'20</p>
                      <p className={styles.descriptionText}>Leicester College</p>
                    </div>
                    <div className={styles.cardBack}>
                      <p>Covered essential elements of working in schools like child protection, GDPR, SEN support and child development.</p>
                    </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardInner}>
                    <div className={styles.cardFront}>
                      <h2>Level 3 - Project Management Diploma</h2>
                      <p className={styles.labelText}>Jan'21 - Mar'21</p>
                      <p className={styles.descriptionText}>Centre of Excellence</p>
                    </div>
                    <div className={styles.cardBack}>
                      <p>Learnt about time management, resource management, task assignments and tracking.</p>
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

export default Education;
