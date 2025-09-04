// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Education from './components/education';
import Experience from './components/experience';
import Projects from './components/projects';

function Activities() {
  return <h2>Activities Section</h2>;
}

function Contact() {
  return <h2>Contact Section</h2>;
}

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;

