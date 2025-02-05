


import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import ProgressBar from './ProgressBar'; 
import './ConsortiumRegistrationForm.css';

const ConsortiumRegistrationForm = () => {
  const navigate = useNavigate();

  const currentStep = 2;
  const totalSteps = 4;
  const stepNames = ['Registration', 'Personal Details', 'Consortium Registration', 'Contact Details', 'Agency Details'];

  const [formData, setFormData] = useState({
    activeYear: '',
    partnerNGOs: '',
    internationalStaff: '',
    nationalStaff: '',
    programPlans: '',
    mainDonors: '',
    annualBudget: '',
    membershipType: '',
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const refreshTokenInterval = 5 * 60 * 1000; 
  const getToken = () => localStorage.getItem('token');
  const setToken = (token) => localStorage.setItem('token', token);

  const refreshToken = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/refresh-token', {
        method: 'POST',
        headers: { Authorization: `Bearer ${getToken()}` },
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.newToken);
      } else {
        console.error('Failed to refresh token.');
      }
    } catch (error) {
      console.error('Error refreshing token:', error);
    }
  };

  useEffect(() => {
    const interval = setInterval(refreshToken, refreshTokenInterval);
    return () => clearInterval(interval); 
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.activeYear) formErrors.activeYear = 'Active year is required';
    if (!formData.partnerNGOs) formErrors.partnerNGOs = 'Partner NGOs are required';
    if (!formData.internationalStaff) formErrors.internationalStaff = 'Number of international staff is required';
    if (!formData.nationalStaff) formErrors.nationalStaff = 'Number of national staff is required';
    if (!formData.programPlans) formErrors.programPlans = 'Program plans are required';
    if (!formData.mainDonors) formErrors.mainDonors = 'Main donors are required';
    if (!formData.annualBudget) formErrors.annualBudget = 'Annual budget is required';

    setErrors(formErrors);
    const isValid = Object.keys(formErrors).length === 0;
    setIsFormValid(isValid);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch('https://mro-consortium-backend-production.up.railway.app/consortium', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmissionMessage('Form submitted successfully!');
          setFormData({
            activeYear: '',
            partnerNGOs: '',
            internationalStaff: '',
            nationalStaff: '',
            programPlans: '',
            mainDonors: '',
            annualBudget: '',
            membershipType: '',
          });
          navigate('/contact-details');
        } else {
          const errorData = await response.json();
          setSubmissionMessage(`Please speed up the process a bit for now tap the button again to upload the data. : ${errorData.message}`);
        }
      } catch (error) {
        setSubmissionMessage(`Error: ${error.message}`);
      } finally {
        setIsSubmitting(false);
      }
      
    } else {
      setSubmissionMessage('Validation failed. Please fill in the required fields.');
    }
  };

  return (
    <div className="consortium-form-page">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} stepNames={stepNames} />
      <div className="consortium-form-container">
        <h1>JOIN THE CONSORTIUM</h1>
        <p>All fields are required unless stated otherwise.</p>

        <form onSubmit={handleSubmit}>
          <h2>Agency Details</h2>

          <label htmlFor="districts">Please select the districts in Somalia/Somaliland:</label>
          <select id="districts" multiple>
    <option value="Abdi Asis">Abdi Asis</option>
    <option value="Adan Yabal">Adan Yabal</option>
    <option value="Afmadow">Afmadow</option>
    <option value="Alula">Alula</option>
    <option value="Badhadhe">Badhadhe</option>
    <option value="Badhan">Badhan</option>
    <option value="Baki">Baki</option>
    <option value="Ballcad">Ballcad</option>
    <option value="Bardhere">Bardhere</option>
    <option value="Baydhaba">Baydhaba</option>
    <option value="Beletweyne">Beletweyne</option>
    <option value="Beletxawa">Beletxawa</option>
    <option value="Bender Bayla">Bender Bayla</option>
    <option value="Berbera">Berbera</option>
    <option value="Bondhere">Bondhere</option>
    <option value="Boramo">Boramo</option>
    <option value="Bosaso">Bosaso</option>
    <option value="Braawe">Braawe</option>
    <option value="Buale">Buale</option>
    <option value="Bulo-Burte">Bulo-Burte</option>
    <option value="Burco">Burco</option>
    <option value="Burhakaba">Burhakaba</option>
    <option value="Burtinle">Burtinle</option>
    <option value="Buuhodle">Buuhodle</option>
    <option value="Caadale">Caadale</option>
    <option value="Cabudwaaq">Cabudwaaq</option>
    <option value="Cadaado">Cadaado</option>
    <option value="Caynabo">Caynabo</option>
    <option value="Ceelafyeyn">Ceelafyeyn</option>
    <option value="Ceel Barde">Ceel Barde</option>
    <option value="Ceelbur">Ceelbur</option>
    <option value="Ceeldeer">Ceeldeer</option>
    <option value="Ceelwaaq">Ceelwaaq</option>
    <option value="Ceerigabo">Ceerigabo</option>
    <option value="Dangoryo">Dangoryo</option>
    <option value="Darkeynle">Darkeynle</option>
    <option value="Dhahar">Dhahar</option>
    <option value="Dhusa-Mareb">Dhusa-Mareb</option>
    <option value="Dinsor">Dinsor</option>
    <option value="Dolow">Dolow</option>
    <option value="Eyl">Eyl</option>
    <option value="Galhareeri">Galhareeri</option>
    <option value="Galkacyo">Galkacyo</option>
    <option value="Garbaharey">Garbaharey</option>
    <option value="Garowe">Garowe</option>
    <option value="Gebiley">Gebiley</option>
    <option value="Goldogob">Goldogob</option>
    <option value="Hamar Weyne">Hamar Weyne</option>
    <option value="Haradhere">Haradhere</option>
    <option value="Hara Jabjab">Hara Jabjab</option>
    <option value="Hargeysa">Hargeysa</option>
    <option value="Hawle Wadaag">Hawle Wadaag</option>
    <option value="Heliwa">Heliwa</option>
    <option value="Hobyo">Hobyo</option>
    <option value="Hodan">Hodan</option>
    <option value="Hudur">Hudur</option>
    <option value="Iskhushuban">Iskhushuban</option>
    <option value="Jalalaqsi">Jalalaqsi</option>
    <option value="Jamame">Jamame</option>
    <option value="Jeriban">Jeriban</option>
    <option value="Jilib">Jilib</option>
    <option value="Jowhar">Jowhar</option>
    <option value="Karaan">Karaan</option>
    <option value="Kismayo">Kismayo</option>
    <option value="Kurtunwaarey">Kurtunwaarey</option>
    <option value="Lascaanood">Lascaanood</option>
    <option value="Las Qorey">Las Qorey</option>
    <option value="Lughaya">Lughaya</option>
    <option value="Luuq">Luuq</option>
    <option value="Mark Afgooye">Mark Afgooye</option>
    <option value="Odwenyen">Odwenyen</option>
    <option value="Qandala">Qandala</option>
    <option value="Qansadhere">Qansadhere</option>
    <option value="Qardho">Qardho</option>
    <option value="Qoryoyley">Qoryoyley</option>
    <option value="Sablaale">Sablaale</option>
    <option value="Sakow">Sakow</option>
    <option value="Shangani">Shangani</option>
    <option value="Sheik">Sheik</option>
    <option value="Shibis Waberi">Shibis Waberi</option>
    <option value="Telex">Telex</option>
    <option value="Tiyeglow">Tiyeglow</option>
    <option value="Wadajir">Wadajir</option>
    <option value="Wajid">Wajid</option>
    <option value="Wanlaweyne">Wanlaweyne</option>
    <option value="Wardhiglye">Wardhiglye</option>
    <option value="Xudun">Xudun</option>
    <option value="Yaqship">Yaqship</option>
    <option value="Yeed">Yeed</option>
    <option value="Zeylac">Zeylac</option>
</select>

          <label htmlFor="activeYear">Which year did the agency become active in Somalia/Somaliland?</label>
          <input
            type="text"
            id="activeYear"
            name="activeYear"
            value={formData.activeYear}
            onChange={handleChange}
            required
          />
          {errors.activeYear && <p className="error">{errors.activeYear}</p>}

          <label htmlFor="partnerNGOs">Please list any partner Agency in Somalia/Somaliland:</label>
          <textarea
            id="partnerNGOs"
            name="partnerNGOs"
            value={formData.partnerNGOs}
            onChange={handleChange}
            placeholder="If none, please state none."
            required
          />
          {errors.partnerNGOs && <p className="error">{errors.partnerNGOs}</p>}

          <label htmlFor="internationalStaff">Number of international staff:</label>
          <input
            type="number"
            id="internationalStaff"
            name="internationalStaff"
            value={formData.internationalStaff}
            onChange={handleChange}
            required
          />
          {errors.internationalStaff && <p className="error">{errors.internationalStaff}</p>}

          <label htmlFor="nationalStaff">Number of national staff:</label>
          <input
            type="number"
            id="nationalStaff"
            name="nationalStaff"
            value={formData.nationalStaff}
            onChange={handleChange}
            required
          />
          {errors.nationalStaff && <p className="error">{errors.nationalStaff}</p>}

          <label htmlFor="neighbouringCountries">Agency presence in neighbouring countries:</label>
          <select id="neighbouringCountries" multiple>
            <option value="djibouti">Djibouti</option>
            <option value="eritrea">Eritrea</option>
            <option value="ethiopia">Ethiopia</option>
            <option value="kenya">Kenya</option>
            <option value="yemen">Yemen</option>
          </select>

          <label htmlFor="programPlans">What are the agency's plans for programmes in the Next Year?</label>
          <textarea
            id="programPlans"
            name="programPlans"
            value={formData.programPlans}
            onChange={handleChange}
            required
          />
          {errors.programPlans && <p className="error">{errors.programPlans}</p>}

          <label htmlFor="mainDonors">Main donors for funding in this Year (one per line):</label>
          <textarea
            id="mainDonors"
            name="mainDonors"
            value={formData.mainDonors}
            onChange={handleChange}
            required
          />
          {errors.mainDonors && <p className="error">{errors.mainDonors}</p>}

          <label htmlFor="annualBudget">Agency's annual budget for Somalia/Somaliland:</label>
          <input
            type="text"
            id="annualBudget"
            name="annualBudget"
            value={formData.annualBudget}
            onChange={handleChange}
            required
          />
          {errors.annualBudget && <p className="error">{errors.annualBudget}</p>}

          <label htmlFor="membershipType">Membership Type:</label>
          <select
  id="membershipType"
  name="membershipType"
  value={formData.membershipType}
  onChange={handleChange}
  required
>
  <option value="full">Full Membership</option>
  <option value="provisional">Provisional Membership</option>
  <option value="observer">Observer Membership</option>
  <option value="affiliate">Affiliate Membership</option>
</select>

          {errors.membershipType && <p className="error">{errors.membershipType}</p>}

          {submissionMessage && <p className="submission-message">{submissionMessage}</p>}

          {isFormValid ? (
            <Link
              to="/contact-details"
              className="submit-button"
              style={{ display: 'inline-block', padding: '10px', backgroundColor: '#4CAF50', color: '#fff', textDecoration: 'none', textAlign: 'center', borderRadius: '5px' }}
            >
              Next
            </Link>
          ) : (
            <button
              type="submit"
              className="submit-button"
              style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px', border: 'none' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ConsortiumRegistrationForm;
