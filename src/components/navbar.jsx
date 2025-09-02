// components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import { FaHome, FaGraduationCap, FaBriefcase, FaTasks, FaCode, FaEnvelope, FaBars } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <button className={styles.burger} onClick={toggleMenu}>
        <FaBars />
      </button>

      <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/education"><FaGraduationCap /> Education</Link></li>
        <li><Link to="/experience"><FaBriefcase /> Experience</Link></li>
        <li><Link to="/activities"><FaTasks /> Activities</Link></li>
        <li><Link to="/projects"><FaCode /> Projects</Link></li>
        <li><Link to="/contact"><FaEnvelope /> Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

