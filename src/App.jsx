import React from 'react'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConsortiumMandate from './components/ConsortiumMandate';
import Navbar from './components/Navbar'; 
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
import ConsortiumJoinForm from './components/ConsortiumJoinForm'; 
import FormFeedbackPage from './components/FormFeedbackPage';
import Dashboard from './components/Dashboard';
import ProfilePage from './components/ProfilePage';
import CoreValues from './components/CoreValues';
import StructureManagement from './components/StructureManagment';
import Strategy from './components/Strategy';
import Coordination from './components/Coordination'; 


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} /> {/* Adjusted to use AboutUs component */}
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/consortium" element={<Consortium />} />
        <Route path="/core-values" element={<CoreValues />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/personal-details" element={<ContactDetails />} />
        <Route path="/coordination" element={<Coordination />} /> {/* Removed leading space */}

        <Route path="/consortium-registration" element={<ConsortiumRegistrationForm />} />
        <Route path="/agency-details" element={<ConsortiumJoinForm />} />
        <Route path="/contact-details" element={<MemberAccountAdministratorForm />} />
        <Route path="/feedback" element={<FormFeedbackPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/advocacy" element={<Advocacy />} />
        <Route path="/Strategy" element={<Strategy />} />
        <Route path="/structure-management" element={< StructureManagement/>} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/document-upload" element={<DocumentUpload />} />
        <Route path="/consortium-mandate" element={<ConsortiumMandate />} /> {/* Corrected this line */}
        <Route path="/member-account-administrator" element={<Dashboard />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
