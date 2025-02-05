import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./AuthProvider";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";

const styles = {
  footerContainer: {
    textAlign: "center",
    padding: "1rem",
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 10,
    backgroundColor: "white",
  },
  horizontalLine: {
    borderTop: "1px solid #8f827a",
    margin: "0 auto 1rem",
    width: "50%",
  },
  footerText: {
    color: "#002D74",
    margin: "0",
    fontSize: "0.75rem",
  },
  footerLink: {
    color: "",
    textDecoration: "none",
    margin: "0 0.5rem",
    fontSize: "0.75rem",
  },
};

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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); 
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getMarginTop = () => {
    if (screenWidth < 768) return "3rem";
    if (screenWidth < 1024) return "4rem";
    return "8rem";
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("You've successfully logged in! Please wait.");
    setLoading(true);

    try {
      const response = await axios.post("https://mro-consortium-backend-production.up.railway.app/login", { email, password });
      const data = response.data;

      setTimeout(() => {
        setLoading(false);

        if (response.status === 200) {
          localStorage.setItem("access_token", data.access_token);
          login(data.user, data.access_token);
          setSuccess("You've successfully logged in! Please wait while your account is being created.");

          if (data.user.role === "admin") {
            navigate("/admin-dashboard");
          } else if (data.user.is_approved && data.user.document_status === "Approved") {
            navigate("/member-account-administrator");
          } else {
            navigate("/consortium");
          }
        }
      }, 5000);
    } catch (err) {
      setSuccess("Sorry.Please double-check your details.");
      setLoading(false);
      setError(err.response?.data?.message || "Opss!");
    }
  };

  return (
    <section className="bg-white flex flex-col justify-between min-h-screen relative">
      <SuccessMessage message={success} isError={!!error} />

      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-gray-500 flex justify-center items-center z-50">
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <div
        className="flex flex-col-reverse md:flex-row max-w-5xl mx-auto w-full items-center"
        style={{ marginTop: getMarginTop() }}
      >
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img className="rounded-2xl mx-auto mt-8 md:mt-0" src="/test2.svg" alt="Login illustration" />
        </motion.div>

        <div className="w-full md:w-1/2 px-8 md:px-16">
          <h4 className="font-bold text-2xl text-[#002D74]">
            Join the Minority Rights Organisation (MROs) by creating an account.
          </h4>
          <p className="text-xs mt-4 text-[#002D74]">If you're already a member, simply log in.</p>
          {error && <p className="text-red-600 mt-2">{error}</p>}

          <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 border"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <div className="relative">
              <input
                className="p-2 border w-full"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <div
                className="absolute top-3 right-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
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
              <button className="py-2 px-5 text-blue border border-red-500 hover:scale-110 duration-300 hover:shadow-lg hover:shadow-[#65cafd] focus:outline-none">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>

     
      <motion.div
        style={styles.footerContainer}
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div style={styles.horizontalLine}></div>
        <p style={styles.footerText}>
          &copy; {new Date().getFullYear()} MROs Consortium. All rights reserved. <br />
          <Link to="/privacy-policy" style={styles.footerLink}>
            Privacy policy
          </Link>{" "}
          |{" "}
          <Link to="/terms-and-conditions" style={styles.footerLink}>
            Terms and conditions
          </Link>{" "}
          |{" "}
          <Link to="/cookies-policy" style={styles.footerLink}>
            Cookies policy
          </Link>{" "}
          |{" "}
          <Link to="/copyright" style={styles.footerLink}>
            Copyright
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Login;
