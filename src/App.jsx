// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';

function Education() {
  return <h2>Education Section</h2>;
}

function Experience() {
  return <h2>Experience Section</h2>;
}

function Activities() {
  return <h2>Activities Section</h2>;
}

function Projects() {
  return <h2>Projects Section</h2>;
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

