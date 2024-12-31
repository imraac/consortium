import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./AuthProvider";
import { FaArrowLeft } from "react-icons/fa"; // Importing the left arrow icon

// SuccessMessage Component
const SuccessMessage = ({ message, isError }) => {
  if (!message) return null;

  return (
    <div
      className={`fixed top-4 right-4 shadow-lg mx-4 my-2 p-3 rounded-md z-50 transition-transform duration-2000 ease-in-out transform scale-100 hover:scale-105 ${
        isError ? "bg-red-600" : "bg-gradient-to-r from-[#66c72e] to-[#218838]"
      }`}
    >
      <p className="font-semibold text-md text-white text-center">{message}</p>
    </div>
  );
};

// Login Component
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(""); // State for success message
  const { login } = useAuth();
  const navigate = useNavigate();

  // Function to handle the login submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("You've successfully logged in! Please wait.");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      const data = response.data;

      // Set a timer to simulate the spinner for 5 seconds
      setTimeout(() => {
        setLoading(false); // Hide spinner after 5 seconds

        if (response.status === 200) {
          localStorage.setItem("access_token", data.access_token);
          login(data.user, data.access_token);
          setSuccess("You've successfully logged in! Please wait while your account is being created.");

          // Navigate based on user role or status after the spinner
          if (data.user.role === "admin") {
            navigate("/admin-dashboard");
          } else if (data.user.is_approved && data.user.document_status === "Approved") {
            navigate("/member-account-administrator");
          } else {
            navigate("/consortium");
          }
        }
      }, 5000); // Set spinner timeout for 5 seconds

    } catch (err) {
      setSuccess("Error logging in. Please make sure your login details are correct.");
      setLoading(false); // Hide spinner immediately on error
      if (err.response) {
        setError(err.response.data.message || "Error logging in. Please try again later.");
      } else {
        setError("Error logging in. Please try again later.");
      }
    }
  };

  return (
    <section className="bg-white flex flex-col justify-between">
      {/* Success/Error Message */}
      <SuccessMessage message={success} isError={!!error} />

      {/* Show the Spinner in the middle of the page */}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-gray-500 flex justify-center items-center z-50">
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <div className="flex flex-col-reverse md:flex-row max-w-5xl mx-auto mt-[164px] w-full items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img className="rounded-2xl mx-auto mt-8 md:mt-0" src="/test2.svg" alt="Login illustration" />
        </div>

        {/* Login Form Section */}
        <div className="w-full md:w-1/2 px-8 md:px-16">
          <h4 className="font-bold text-2xl text-[#002D74]">
            Join the Minority Rights Organisation (MROs) by creating an account.
          </h4>
          <p className="text-xs mt-4 text-[#002D74]">
            If you're already a member, simply log in.
          </p>

          {error && <p className="text-red-600 mt-2">{error}</p>}

          {/* Show Login Form */}
          <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              className="p-2 rounded-xl border"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-[#65cafd] via-[#0085d0] to-[#006bb3] text-white py-2 hover:scale-105 duration-300 hover:shadow-lg hover:shadow-[#65cafd] focus:outline-none"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-480">
            <hr />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-480" />
          </div>

          <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
            <Link to="/reset-password">Forgot your password?</Link>
          </div>
          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>Don't have an account?</p>
            <Link to="/signup">
              <button
                className="py-2 px-5 text-white border border-red-500 hover:scale-110 duration-300 bg-gradient-to-r from-[#65cafd] via-[#0085d0] to-[#006bb3] hover:shadow-lg hover:shadow-[#65cafd] focus:outline-none"
              >
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Arrow Back to Signup */}
      <Link 
        to="/signup" 
        className="absolute top-20 left-2 md:left-[300px] flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#65cafd] via-[#65cafd] to-[#65cafd] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-2xl hover:shadow-[#65cafd] transition-all duration-300"
      >
        <FaArrowLeft className="text-xl" />
      </Link>
    </section>
  );
};

export default Login;
