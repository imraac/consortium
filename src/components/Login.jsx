



// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Footer from "./Footer";
// import { useAuth } from "./AuthProvider";
// import axios from "axios";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await axios.post("http://localhost:5000/login", {
//         email,
//         password,
//       });

//       const data = response.data;

//       // Check if the login was successful
//       if (response.status === 200) {
//         // Save JWT token to local storage
//         localStorage.setItem("access_token", data.access_token);
//         // Update context with user and token
//         login(data.user, data.access_token);

//         // Redirect logic based on user role, approval status, and document status
//         if (data.user.role === "admin") {
//           navigate("/admin-dashboard");
//         } else if (data.user.is_approved && data.user.document_status === "Approved") {
//           navigate("/member-account-administrator");
//         } else {
//           navigate("/consortium");
//         }
//       }
//     } catch (err) {
//       // Handle error messages from the server
//       if (err.response) {
//         setError(err.response.data.message || "Error logging in. Please try again later.");
//       } else {
//         setError("Error logging in. Please try again later.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen justify-center">
//       <div className="flex flex-col md:flex-row items-start justify-between p-5 mt-28">
//         <div className="max-w-2xl mb-5 md:mr-2">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Login</h2>
//           {error && <p className="text-red-600">{error}</p>}
//           <p className="text-gray-600 mt-4">
//             New here?{" "}
//             <Link to="/signup" className="text-blue-500 hover:underline">
//               Create an account
//             </Link>
//           </p>
//         </div>

//         <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full md:w-1/3">
//           <form onSubmit={handleLoginSubmit}>
//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="block text-gray-600 font-bold mb-2"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="password"
//                 className="block text-gray-600 font-bold mb-2"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 disabled:opacity-50"
//             >
//               {loading ? "Logging in..." : "Login"}
//             </button>
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Login;



import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useAuth } from "./AuthProvider";
import axios from "axios";

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
        } else if (data.user.is_approved && data.user.document_status === "Approved") {
          navigate("/member-account-administrator");
        } else {
          navigate("/consortium");
        }
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Error logging in. Please try again later.");
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
          src="/hands2-QvFd5z-7.png"
          alt="Login illustration"
        />
      </div>
  
      <div className="w-full md:w-1/2 px-8 md:px-16">
        <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
        <p className="text-xs mt-4 text-[#002D74]">
          If you are already a member, easily log in
        </p>
  
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="gray"
              className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
              viewBox="0 0 16 16"
            >
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
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
          <a href="#">Forgot your password?</a>
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
