import 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust the path as needed
import LandingPage from './components/LandingPage'; // Import the LandingPage component
import Consortium from './components/Consortium'; // Import the Consortium component
import Registration from './components/Registration'; 
import ContactDetails from './components/ContactDetails'; 
import ConsortiumRegistrationForm from './components/ConsortiumRegistrationForm';
import Login from './components/Login';
import MemberAccountAdministratorForm from './components/MemberAccountAdministratorForm';
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
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact-details" element={<ContactDetails />} />
        <Route path="/consortium-registration" element={<ConsortiumRegistrationForm />} />
        <Route path="/member-account-administrator" element={<MemberAccountAdministratorForm />} /> {/* Add the new route */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
