// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "./AuthProvider";
// import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
// import { motion } from "framer-motion";

// const styles = {
//   footerContainer: {
//     textAlign: "center",
//     padding: "1rem",
//     position: "absolute",
//     bottom: 0,
//     width: "100%",
//     zIndex: 10,
//     backgroundColor: "white",
//   },
//   horizontalLine: {
//     borderTop: "1px solid #8f827a",
//     margin: "0 auto 1rem",
//     width: "50%",
//   },
//   footerText: {
//     color: "#002D74",
//     margin: "0",
//     fontSize: "0.75rem",
//   },
//   footerLink: {
//     color: "",
//     textDecoration: "none",
//     margin: "0 0.5rem",
//     fontSize: "0.75rem",
//   },
// };

// const SuccessMessage = ({ message, isError }) => {
//   if (!message) return null;

//   return (
//     <div
//       className={`fixed top-4 right-4 shadow-lg mx-4 my-2 p-3 rounded-md z-50 transition-transform duration-2000 ease-in-out transform scale-100 hover:scale-105 ${
//         isError ? "bg-red-600" : "bg-gradient-to-r from-[#66c72e] to-[#218838]"
//       }`}
//     >
//       <p className="font-semibold text-md text-white text-center">{message}</p>
//     </div>
//   );
// };

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [screenWidth, setScreenWidth] = useState(window.innerWidth); 
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleResize = () => setScreenWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const getMarginTop = () => {
//     if (screenWidth < 768) return "3rem";
//     if (screenWidth < 1024) return "4rem";
//     return "8rem";
//   };

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("You've successfully logged in! Please wait.");
//     setLoading(true);

//     try {
//       const response = await axios.post("https://mrosconsortium.org/login", { email, password });
//       const data = response.data;

//       setTimeout(() => {
//         setLoading(false);

//         if (response.status === 200) {
//           localStorage.setItem("access_token", data.access_token);
//           login(data.user, data.access_token);
//           setSuccess("You've successfully logged in! Please wait while your account is being created.");

//           if (data.user.role === "admin") {
//             navigate("/admin-dashboard");
//           } else if (data.user.is_approved && data.user.document_status === "Approved") {
//             navigate("/member-account-administrator");
//           } else {
//             navigate("/consortium");
//           }
//         }
//       }, 5000);
//     } catch (err) {
//       setSuccess("Sorry, your password was incorrect. Please double-check your password.");
//       setLoading(false);
//       setError(err.response?.data?.message || "Opss!");
//     }
//   };

//   return (
//     <section className="bg-white flex flex-col justify-between min-h-screen relative">
//       <SuccessMessage message={success} isError={!!error} />

//       {loading && (
//         <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-gray-500 flex justify-center items-center z-50">
//           <div className="spinner-border text-light" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         </div>
//       )}

//       <div
//         className="flex flex-col-reverse md:flex-row max-w-5xl mx-auto w-full items-center"
//         style={{ marginTop: getMarginTop() }}
//       >
//         <motion.div
//           className="w-full md:w-1/2"
//           initial={{ x: -100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <img className="rounded-2xl mx-auto mt-8 md:mt-0" src="/test2.svg" alt="Login illustration" />
//         </motion.div>

//         <div className="w-full md:w-1/2 px-8 md:px-16">
//           <h4 className="font-bold text-2xl text-[#002D74]">
//             Join the Minority Rights Organisation (MROs) by creating an account.
//           </h4>
//           <p className="text-xs mt-4 text-[#002D74]">If you're already a member, simply log in.</p>
//           {error && <p className="text-red-600 mt-2">{error}</p>}

//           <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
//             <input
//               className="p-2 mt-8 border"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               required
//             />
//             <div className="relative">
//               <input
//                 className="p-2 border w-full"
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 required
//               />
//               <div
//                 className="absolute top-3 right-3 cursor-pointer"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <FaEye /> : <FaEyeSlash />}
//               </div>
//             </div>
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-gradient-to-r from-[#65cafd] via-[#0085d0] to-[#006bb3] text-white py-2 hover:scale-105 duration-300 hover:shadow-lg hover:shadow-[#65cafd] focus:outline-none"
//             >
//               {loading ? "Logging in..." : "Login"}
//             </button>
//           </form>

//           <div className="mt-6 grid grid-cols-3 items-center text-gray-480">
//             <hr />
//             <p className="text-center text-sm">OR</p>
//             <hr className="border-gray-480" />
//           </div>

//           <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
//             <Link to="/reset-password">Forgot your password?</Link>
//           </div>
//           <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
//             <p>Don't have an account?</p>
//             <Link to="/signup">
//               <button className="py-2 px-5 text-blue border border-red-500 hover:scale-110 duration-300 hover:shadow-lg hover:shadow-[#65cafd] focus:outline-none">
//                 Register
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>

     
//       <motion.div
//         style={styles.footerContainer}
//         initial={{ y: 50 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//       >
//         <div style={styles.horizontalLine}></div>
//         <p style={styles.footerText}>
//           &copy; {new Date().getFullYear()} MROs Consortium. All rights reserved. <br />
//           <Link to="/privacy-policy" style={styles.footerLink}>
//             Privacy policy
//           </Link>{" "}
//           |{" "}
//           <Link to="/terms-and-conditions" style={styles.footerLink}>
//             Terms and conditions
//           </Link>{" "}
//           |{" "}
//           <Link to="/cookies-policy" style={styles.footerLink}>
//             Cookies policy
//           </Link>{" "}
//           |{" "}
//           <Link to="/copyright" style={styles.footerLink}>
//             Copyright
//           </Link>
//         </p>
//       </motion.div>
//     </section>
//   );
// };

// export default Login;



import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jsPDF from 'jspdf';
import './Registration.css';
import Footer from './Footer';
import ProgressBar from './ProgressBar'; // Import the ProgressBar component

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    acronym: '',
    description: '',
    missionStatement: '',
    website: '',
    isNGO: false,
    yearsOperational: '',
    reasonToJoin: '',
    participatesInConsortium: false,
    understandsPrinciples: false,
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1); // Initialize current step
  const totalSteps = 6; // Define total steps
  const navigate = useNavigate();
  const stepNames = ['Registration', 'Personal Details', 'Consortium Registration', 'Contact Details', 'Agency Details'];

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
    window.scrollTo(0, 0);
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Registration Details', 105, 20, { align: 'center' });
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(12);

    const textLines = [
      { label: 'Full Name:', value: formData.fullName },
      { label: 'Acronym:', value: formData.acronym || 'N/A' },
      { label: 'Description:', value: formData.description },
      { label: 'Mission Statement:', value: formData.missionStatement },
      { label: 'Website:', value: formData.website },
      { label: 'Are you an NGO?', value: formData.isNGO ? 'Yes' : 'No' },
      { label: 'Years Operational:', value: formData.yearsOperational },
      { label: 'Reason for Joining:', value: formData.reasonToJoin },
      { label: 'Willing to participate in the consortium?', value: formData.participatesInConsortium ? 'Yes' : 'No' },
      { label: 'Understands the principles outlined?', value: formData.understandsPrinciples ? 'Yes' : 'No' },
    ];

    let yPosition = 40;
    const lineSpacing = 10;

    textLines.forEach(({ label, value }) => {
      const splitText = doc.splitTextToSize(`${label} ${value}`, 180);
      doc.text(splitText, 10, yPosition);
      yPosition += splitText.length * lineSpacing;
    });

    doc.save('Registration_Details.pdf');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    if (!formData.fullName || !formData.description || !formData.missionStatement || !formData.website || !formData.yearsOperational || !formData.reasonToJoin) {
      setError('Please fill in all required fields.');
      setLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'https://mro-consortium-backend-production.up.railway.app/agency',
        {
          full_name: formData.fullName,
          acronym: formData.acronym,
          description: formData.description,
          mission_statement: formData.missionStatement,
          website: formData.website,
          is_ngo: formData.isNGO,
          years_operational: formData.yearsOperational,
          reason_for_joining: formData.reasonToJoin,
          willing_to_participate: formData.participatesInConsortium,
          commitment_to_principles: formData.understandsPrinciples,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setSuccess(true);
        generatePDF(); 
        setFormData({
          fullName: '',
          acronym: '',
          description: '',
          missionStatement: '',
          website: '',
          isNGO: false,
          yearsOperational: '',
          reasonToJoin: '',
          participatesInConsortium: false,
          understandsPrinciples: false,
        });
        setCurrentStep((prev) => prev + 1); 
        navigate('/personal-details');
      } else {
        setError('Registration failed');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Unauthorized access. Please log in.');
        navigate('/registration');
      } else {
        setError('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registration-container">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} stepNames={stepNames} />
      <div className="registration-form-container">
        <h1>Basic Information</h1>
        <p>All fields are required unless stated otherwise.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Organization Full Name:</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Acronym Name:</label>
            <input type="text" name="acronym" value={formData.acronym} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Key Activities and Programs:</label>
            <p>(Provide an overview of the main activities and programs your organization is involved in, particularly those related to minority rights.)</p>
            <textarea name="description" value={formData.description} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Mission Statement:</label>
            <p>(Please describe the primary goals and mission of your organization, focusing on its relevance to minority rights.)</p>
            <textarea name="missionStatement" value={formData.missionStatement} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Website:</label>
            <input type="url" name="website" value={formData.website} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" name="isNGO" checked={formData.isNGO} onChange={handleChange} />
              Are you an NGO?
            </label>
          </div>
          <div className="form-group">
            <label>Years Operational:</label>
            <input type="text" name="yearsOperational" value={formData.yearsOperational} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Reason for Joining:</label>
            <p>(Explain how membership will benefit your organization and how you plan to contribute to the consortium’s goals.)</p>
            <textarea name="reasonToJoin" value={formData.reasonToJoin} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" name="participatesInConsortium" checked={formData.participatesInConsortium} onChange={handleChange} />
              Willing to participate in the consortium?
            </label>
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" name="understandsPrinciples" checked={formData.understandsPrinciples} onChange={handleChange} />
              Understands the principles outlined?
            </label>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>Submission successful!</p>}
          <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
