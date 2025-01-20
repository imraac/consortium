// import React, { useEffect, useState } from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
// import ConsortiumMandate from "./components/ConsortiumMandate";
// import Navbar from "./components/Navbar";
// import LandingPage from "./components/LandingPage";
// import Consortium from "./components/Consortium";
// import Registration from "./components/Registration";
// import ContactDetails from "./components/ContactDetails";
// import DocumentUpload from "./components/DocumentUpload";
// import ConsortiumRegistrationForm from "./components/ConsortiumRegistrationForm";
// import Login from "./components/Login";
// import MemberAccountAdministratorForm from "./components/MemberAccountAdministratorForm";
// import AboutUs from "./components/AboutUs";
// import Advocacy from "./components/Advocacy";
// import ConsortiumJoinForm from "./components/ConsortiumJoinForm";
// import FormFeedbackPage from "./components/FormFeedbackPage";
// import Dashboard from "./components/Dashboard";
// import ProfilePage from "./components/ProfilePage";
// import CoreValues from "./components/CoreValues";
// import StructureManagement from "./components/StructureManagment";
// import Strategy from "./components/Strategy";
// import Coordination from "./components/Coordination";
// import Secretariat from "./components/Secretariat";
// import ConsortiumMembers from "./components/ConsortiumMembers";
// import AdminDashboard from "./components/AdminDashboard";
// import { AuthProvider } from "./components/AuthProvider";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Signup from "./components/Singup";
// import DocumentUploadSuccess from "./components/DocumentUploadSuccess";
// import UpdateProfile from "./components/UpdateProfile";
// import ContactInfo from "./components/ContactInfo";
// import ChildAccount from "./components/ChildAccount";
// import ResetPassword from "./components/ResetPassword";
// import Certification from './components/Certification';
// import ForgotPassword from "./components/ForgotPassword";
// import RegionalRepresentatives from './components/RegionalRepresentatives';
// import SeatsRepresentatives from './components/SeatsRepresentatives';
// import FeatureStories from './components/FeatureStories';
// import RepresentationComponent from './components/RepresentationComponent';
// import InformationSharingComponent from './components/InformationSharingComponent';
// import WorkingGroupsComponent from './components/WorkingGroupsComponent';
// import TwinningProgramComponent from './components/TwinningProgramComponent';
// import AdditionalServicesComponent from './components/AdditionalServicesComponent';
// import NotFoundPage from './components/NotFoundPage';  // Import the NotFoundPage component

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <NavbarWrapper />
//         <Routes>
//           {/* Redirect root ("/") to "/login" */}
//           <Route path="/" element={<Navigate to="/login" />} />
//           <Route path="/certification" element={<Certification />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/about-us" element={<AboutUs />} />
//           <Route path="/contact" element={<div>Contact Page</div>} />
//           <Route path="/services" element={<div>Services Page</div>} />
//           <Route path="/landingpage" element={<LandingPage />} />

//           <Route
//             path="/consortium"
//             element={
//               <ProtectedRoute>
//                 <Consortium />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="/core-values" element={<CoreValues />} />
//           <Route
//             path="/registration"
//             element={
//               <ProtectedRoute>
//                 <Registration />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="/representation" element={<RepresentationComponent />} />
//           <Route path="/information-sharing" element={<InformationSharingComponent />} />
//           <Route path="/working-groups" element={<WorkingGroupsComponent />} />
//           <Route path="/twinning-program" element={<TwinningProgramComponent />} />
//           <Route path="/additional-services" element={<AdditionalServicesComponent />} />

//           <Route path="/regional-representatives" element={<RegionalRepresentatives />} />
//           <Route path="/seats-representatives" element={<SeatsRepresentatives />} />
//           <Route path="/feature-stories" element={<FeatureStories />} />
//           <Route path="/consortium-members" element={<ConsortiumMembers />} />
//           <Route path="/personal-details" element={<ContactDetails />} />
//           <Route path="/coordination" element={<Coordination />} />
//           <Route path="/secretariat" element={<Secretariat />} />
//           <Route path="/consortium-registration" element={<ConsortiumRegistrationForm />} />
//           <Route path="/agency-details" element={<ConsortiumJoinForm />} />
//           <Route path="/contact-details" element={<MemberAccountAdministratorForm />} />
//           <Route path="/feedback" element={<FormFeedbackPage />} />
//           <Route path="/reset-password/:token" element={<ResetPassword />} />
//           <Route path="/reset-password" element={<ForgotPassword />} />
//           <Route path="/advocacy" element={<Advocacy />} />
//           <Route path="/Strategy" element={<Strategy />} />
//           <Route path="/structure-management" element={<StructureManagement />} />
//           <Route path="/profile" element={<ProfilePage />} />
//           <Route path="/update-profile" element={<UpdateProfile />} />
//           <Route path="/update-contact" element={<ContactInfo />} />
//           <Route path="/child-accounts" element={<ChildAccount />} />
//           <Route path="/documents-upload-success" element={<DocumentUploadSuccess />} />
//           <Route path="/document-upload" element={<DocumentUpload />} />
//           <Route path="/consortium-mandate" element={<ConsortiumMandate />} />
//           <Route path="/member-account-administrator" element={<Dashboard />} />
//           <Route
//             path="/admin-dashboard"
//             element={
//               <ProtectedRoute>
//                 <AdminDashboard />
//               </ProtectedRoute>
//             }
//           />
         
//          {/* Specific route for NotFoundPage */}
//          <Route exact path="/not-found" component={NotFoundPage} />

// {/* Catch-all route for 404 */}
// <Route path="*" component={NotFoundPage} /> 
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// };

// // This component checks if the current route is login or signup and conditionally renders the Navbar
// const NavbarWrapper = () => {
//   const location = useLocation();
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true); // Ensure navbar is rendered only after the component is mounted
//   }, []);

//   return isMounted && location.pathname !== "/login" && location.pathname !== "/signup" ? <Navbar /> : null;
// };

// export default App;



import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import ConsortiumMandate from "./components/ConsortiumMandate";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Consortium from "./components/Consortium";
import Registration from "./components/Registration";
import ContactDetails from "./components/ContactDetails";
import DocumentUpload from "./components/DocumentUpload";
import ConsortiumRegistrationForm from "./components/ConsortiumRegistrationForm";
import Login from "./components/Login";
import MemberAccountAdministratorForm from "./components/MemberAccountAdministratorForm";
import AboutUs from "./components/AboutUs";
import Advocacy from "./components/Advocacy";
import ConsortiumJoinForm from "./components/ConsortiumJoinForm";
import FormFeedbackPage from "./components/FormFeedbackPage";
import Dashboard from "./components/Dashboard";
import ProfilePage from "./components/ProfilePage";
import CoreValues from "./components/CoreValues";
import StructureManagement from "./components/StructureManagment";
import Strategy from "./components/Strategy";
import Coordination from "./components/Coordination";
import Secretariat from "./components/Secretariat";
import ConsortiumMembers from "./components/ConsortiumMembers";
import AdminDashboard from "./components/AdminDashboard";
import { AuthProvider } from "./components/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/Singup";
import DocumentUploadSuccess from "./components/DocumentUploadSuccess";
import UpdateProfile from "./components/UpdateProfile";
import ContactInfo from "./components/ContactInfo";
import ChildAccount from "./components/ChildAccount";
import ResetPassword from "./components/ResetPassword";
import Certification from './components/Certification';
import ForgotPassword from "./components/ForgotPassword";
import RegionalRepresentatives from './components/RegionalRepresentatives';
import SeatsRepresentatives from './components/SeatsRepresentatives';
import FeatureStories from './components/FeatureStories';
import RepresentationComponent from './components/RepresentationComponent';
import InformationSharingComponent from './components/InformationSharingComponent';
import WorkingGroupsComponent from './components/WorkingGroupsComponent';
import TwinningProgramComponent from './components/TwinningProgramComponent';
import AdditionalServicesComponent from './components/AdditionalServicesComponent';
import NotFoundPage from './components/NotFoundPage';  // Import the NotFoundPage component

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <NavbarWrapper />
        <Routes>
          {/* Redirect root ("/") to "/login" */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="/services" element={<div>Services Page</div>} />
          <Route path="/landingpage" element={<LandingPage />} />

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
          <Route path="/representation" element={<RepresentationComponent />} />
          <Route path="/information-sharing" element={<InformationSharingComponent />} />
          <Route path="/working-groups" element={<WorkingGroupsComponent />} />
          <Route path="/twinning-program" element={<TwinningProgramComponent />} />
          <Route path="/additional-services" element={<AdditionalServicesComponent />} />

          <Route path="/regional-representatives" element={<RegionalRepresentatives />} />
          <Route path="/seats-representatives" element={<SeatsRepresentatives />} />
          <Route path="/feature-stories" element={<FeatureStories />} />
          <Route path="/consortium-members" element={<ConsortiumMembers />} />
          <Route path="/personal-details" element={<ContactDetails />} />
          <Route path="/coordination" element={<Coordination />} />
          <Route path="/secretariat" element={<Secretariat />} />
          <Route path="/consortium-registration" element={<ConsortiumRegistrationForm />} />
          <Route path="/agency-details" element={<ConsortiumJoinForm />} />
          <Route path="/contact-details" element={<MemberAccountAdministratorForm />} />
          <Route path="/feedback" element={<FormFeedbackPage />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/reset-password" element={<ForgotPassword />} />
          <Route path="/advocacy" element={<Advocacy />} />
          <Route path="/Strategy" element={<Strategy />} />
          <Route path="/structure-management" element={<StructureManagement />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/update-contact" element={<ContactInfo />} />
          <Route path="/child-accounts" element={<ChildAccount />} />
          <Route path="/documents-upload-success" element={<DocumentUploadSuccess />} />
          <Route path="/document-upload" element={<DocumentUpload />} />
          <Route path="/consortium-mandate" element={<ConsortiumMandate />} />
          <Route path="/member-account-administrator" element={<Dashboard />} />
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Specific route for NotFoundPage */}
          <Route path="/not-found" element={<NotFoundPage />} />

          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

// This component checks if the current route is login, signup, or not-found and conditionally renders the Navbar
const NavbarWrapper = () => {
  const location = useLocation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure navbar is rendered only after the component is mounted
  }, []);

  return isMounted && !["/login", "/signup", "/not-found"].includes(location.pathname) ? (
    <Navbar />
  ) : null;
};

export default App;
