import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import Footer from "./Footer";
import { useAuth } from "./AuthProvider";
import axios from "axios";

// SuccessMessage Component
const SuccessMessage = ({ message }) => {
  return (
    <div
      className="fixed top-[150px] right-4 shadow-md mx-2 rounded-md p-4 z-50 transition-transform duration-300 ease-in-out transform"
      style={{
        backgroundColor: "#65cafd",
        transform: message ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <p className="font-semibold text-lg text-[white] text-center">{message}</p>
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
  const [showPassword, setShowPassword] = useState(false); // State for showing/hiding password
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(""); // Reset success message

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      const data = response.data;

      if (response.status === 200) {
        localStorage.setItem("access_token", data.access_token);
        login(data.user, data.access_token);

        if (data.user.role === "admin") {
          navigate("/admin-dashboard");
        } else if (
          data.user.is_approved &&
          data.user.document_status === "Approved"
        ) {
          navigate("/member-account-administrator");
        } else {
          navigate("/consortium");
        }
      }
    } catch (err) {
      if (err.response) {
        setError(
          err.response.data.message ||
            "Error logging in. Please try again later."
        );
      } else {
        setError("Error logging in. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white flex flex-col justify-between">
      <div className="flex flex-col-reverse md:flex-row max-w-5xl mx-auto mt-[164px] w-full items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            className="rounded-2xl mx-auto mt-8 md:mt-0"
            src="/Logos.jpeg"
            alt="Login illustration"
          />
        </div>

        {/* Framer Motion applied to text */}
        <div className="w-full md:w-1/2 px-8 md:px-16">
          <motion.h4
            className="font-bold text-2xl text-[#002D74]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            Join the Minority Rights Organisation (MROs) by creating an account.
          </motion.h4>

          <motion.p
            className="text-xs mt-4 text-[#002D74]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
          >
            If you're already a member, simply log in.
          </motion.p>

          {error && <p className="text-red-600 mt-2">{error}</p>}

          <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type={showPassword ? "text" : "password"} // Toggle between text and password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="gray"
                className="bi bi-eye cursor-pointer absolute top-1/2 right-3 -translate-y-1/2"
                viewBox="0 0 16 16"
                onClick={() => setShowPassword((prev) => !prev)} // Toggle password visibility
              >
                {/* Password eye icon */}
                <path d="M8 3C4.5 3 1.5 7 1.5 7s3 4 6.5 4 6.5-4 6.5-4S11.5 3 8 3zM8 10.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zM8 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
              </svg>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#65cafd] text-white py-2 hover:scale-105 duration-300"
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
              <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Login;
