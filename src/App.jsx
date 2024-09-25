import React from 'react'; // Make sure to import React
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar'; // Adjust the path as needed
import LandingPage from './components/LandingPage';
import Consortium from './components/Consortium';
import Registration from './components/Registration';
import ContactDetails from './components/ContactDetails';
import DocumentUpload from './components/DocumentUpload';
import ConsortiumRegistrationForm from './components/ConsortiumRegistrationForm';
import Login from './components/Login';
import MemberAccountAdministratorForm from './components/MemberAccountAdministratorForm';
import AboutUs from './components/AboutUs';
import Advocacy from './components/Advocacy';
import ConsortiumJoinForm from './components/ConsortiumJoinForm'; // Ensure this path is correct
import FormFeedbackPage from './components/FormFeedbackPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} /> {/* Adjusted to use AboutUs component */}
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/consortium" element={<Consortium />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/personal-details" element={<ContactDetails />} />
        <Route path="/consortium-registration" element={<ConsortiumRegistrationForm />} />
        <Route path="/agency-details" element={<ConsortiumJoinForm />} />
        <Route path="/contact-details" element={<MemberAccountAdministratorForm />} />
        <Route path="/feedback" element={<FormFeedbackPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/advocacy" element={<Advocacy />} />
        <Route path="/document-upload" element={<DocumentUpload />} />

        {/* Optional: Catch-all route for undefined paths */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
