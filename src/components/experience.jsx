import styles from './sections.module.css';
import { FaLinkedin } from 'react-icons/fa';

function Experience() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.sectionContainer}>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <h2>Exams & Assessment Officer</h2>
                <p className={styles.labelText}>2021–Present</p>
                <p className={styles.descriptionText}>Judgemeadow Community College - Leicester</p>
              </div>
              <div className={styles.cardBack}>
                <p>Responsible for conducting GCSE exams as per JCQ regulations. Deal with hiring and induction of invigilators, MIS, reporting , Awarding bodies and their portals. Exam entries, seatings, results and post-results are also managed by myself. </p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <h2>Supply Teaching Assistant</h2>
                <p className={styles.labelText}>2020–2021</p>
                <p className={styles.descriptionText}>Supply Personnel</p>
              </div>
              <div className={styles.cardBack}>
                <p>Worked with Year 4 to develop reading fluency and comprehension. Focus on vocabulary, comprehension, inference, imagination and prediction skills of students and design SMART goals for them to achieve them.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <h2>Exam Invigilator</h2>
                <p className={styles.labelText}>2019–2020</p>
                <p className={styles.descriptionText}>Soar Valley College & Fullhurst College</p>
              </div>
              <div className={styles.cardBack}>
                <p>Conduct exams according to JCQ regulations. Make sure that access
                    arrangements for all the entitled candidates are in place. Setting up exam halls,
                    managing attendance, seating plans, packing scripts etc.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <h2>Computer Teacher (Y6- Y8)</h2>
                <p className={styles.labelText}>2005–2007</p>
                <p className={styles.descriptionText}>The Lahore Alma, Lahore, Pakistan</p>
              </div>
              <div className={styles.cardBack}>
                <p>Teach theory in classroom and practical in lab-sessions. Design curriculum, make
                    lesson plans and mark assessments.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <h2>Examination Services Officer</h2>
                <p className={styles.labelText}>2004–2005</p>
                <p className={styles.descriptionText}>British Council, Lahore</p>
              </div>
              <div className={styles.cardBack}>
                <p>Conduct UK based exams O/A levels, ACCA, IELTS etc in Pakistan. Developed an online system for IELTS department to handle exam activities
which was approved by IT department in UK</p>
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

export default Experience;

