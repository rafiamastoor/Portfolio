import styles from './contact.module.css';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.sectionContainer}>
        <h2 className={styles.title}>Get in Touch</h2>

        <div className={styles.cardGrid}>
          {/* Email Card */}
          <div className={styles.card}>
            <FaEnvelope className={styles.icon} />
            <p className={styles.label}>Email</p>
            <p className={styles.value}>rafiamastoor@gmail.com</p>
          </div>

          {/* Phone Card */}
          <div className={styles.card}>
            <FaPhone className={styles.icon} />
            <p className={styles.label}>Phone</p>
            <p className={styles.value}>+44 222 222 2222</p>
          </div>
        </div>

        {/* Booking Section */}
        <div className={styles.bookingCard}>
          <h3 className={styles.bookingTitle}>Book a Meeting</h3>
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2XTKANxJVNPFCe_HybMOIzd-Xuv-ZozfHvQXQZKUvzZWP3rW67_5U0geVwoVJtLaRZYeMHMq2L?gv=true"
            title="Google Calendar Booking"
            frameBorder="0"
            className={styles.iframe}
            allowFullScreen
          ></iframe>
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

export default Contact;
