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
import Secretariat from './components/Secretariat';
import ConsortiumMembers from './components/ConsortiumMembers';
import { AuthProvider } from "./components/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute"; 
import Signup from './components/Singup';
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUs />} />{" "}
          {/* Adjusted to use AboutUs component */}
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="/services" element={<div>Services Page</div>} />
          <Route
            path="/consortium"
            element={
              <ProtectedRoute>
                <Consortium />
              </ProtectedRoute>
            }
          />
          <Route path="/core-values" element={<CoreValues />} />
          <Route
            path="/registration"
            element={
              <ProtectedRoute>
                <Registration />
              </ProtectedRoute>
            }
          />
          <Route path="/consortium-members" element={<ConsortiumMembers />} />
          <Route path="/personal-details" element={<ContactDetails />} />
          <Route path="/coordination" element={<Coordination />} />{" "}
          {/* Removed leading space */}
          <Route path="/secretariat" element={<Secretariat />} />
          <Route
            path="/consortium-registration"
            element={<ConsortiumRegistrationForm />}
          />
          <Route path="/agency-details" element={<ConsortiumJoinForm />} />
          <Route
            path="/contact-details"
            element={<MemberAccountAdministratorForm />}
          />
          <Route path="/feedback" element={<FormFeedbackPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/advocacy" element={<Advocacy />} />
          <Route path="/Strategy" element={<Strategy />} />
          <Route
            path="/structure-management"
            element={<StructureManagement />}
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/document-upload" element={<DocumentUpload />} />
          <Route
            path="/consortium-mandate"
            element={
              <ProtectedRoute>
                <ConsortiumMandate />
              </ProtectedRoute>
            }
          />
          <Route
            path="/member-account-administrator"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
