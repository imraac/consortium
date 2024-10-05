import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useAuth } from "./AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("access_token", data.access_token);
        login(data.user, data.access_token); // Store user and token in context
        navigate("/consortium");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Error logging in. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-center">
      <div className="flex flex-col md:flex-row items-start justify-between p-5 mt-28">
        <div className="max-w-2xl mb-5 md:mr-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Login</h2>
          {error && <p className="text-red-600">{error}</p>}
          <p className="text-gray-600 mt-4">
            New here?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Create an account
            </Link>
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 disabled:opacity-50"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
