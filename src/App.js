import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactForm from './pages/ContactForm';



function App() {
  return (
    <div className="App"><Router>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/projects" element = {<Projects />} />
        <Route path="/experience" element = {<Experience />} />
        <Route path="/contactForm" element = {<ContactForm />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
