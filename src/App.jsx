import 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust the path as needed
import LandingPage from './components/LandingPage'; // Import the LandingPage component
import Consortium from './components/Consortium'; // Import the Consortium component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Route for the landing page */}
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/consortium" element={<Consortium />} /> {/* Route for the Consortium page */}
      </Routes>
    </Router>
  );
};

export default App;
