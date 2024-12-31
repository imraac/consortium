// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Footer from "./Footer";

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("member");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleSignupSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await fetch("http://localhost:5000/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, email, password, role }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         localStorage.setItem("access_token", data.access_token);
//         console.log("Signup successful", data);
//         navigate("/login");
//       } else {
//         setError(data.message);
//       }
//     } catch (err) {
//       setError("Error signing up. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen justify-center">
//       <div className="flex flex-col md:flex-row items-start justify-between p-5 mt-28">
//         <div className="max-w-2xl mb-5 md:mr-2">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Sign Up</h2>
//           {error && <p className="text-red-600">{error}</p>}
//           <p className="text-gray-600 mt-4">
//             Already have an account?{" "}
//             <Link to="/login" className="text-blue-500 hover:underline">
//               Log in
//             </Link>
//           </p>
//         </div>

//         <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full md:w-1/3">
//           <form onSubmit={handleSignupSubmit}>
//             <div className="mb-4">
//               <label
//                 htmlFor="username"
//                 className="block text-gray-600 font-bold mb-2"
//               >
//                 Username
//               </label>
//               <input
//                 type="text"
//                 id="username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
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
//             <div className="mb-4">
//               <label
//                 htmlFor="role"
//                 className="block text-gray-600 font-bold mb-2"
//               >
//                 Role
//               </label>
//               <select
//                 id="role"
//                 value={role}
//                 onChange={(e) => setRole(e.target.value)}
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               >
//                 <option value="member">Member</option>
//                 <option value="admin">Admin</option>
//               </select>
//             </div>
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 disabled:opacity-50"
//             >
//               Sign Up
//             </button>
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Signup;



import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("member");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password, role }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("access_token", data.access_token);
        console.log("Signup successful", data);
        navigate("/login");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Oops!. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white flex flex-col justify-between min-h-screen">
      <div className="flex flex-col-reverse md:flex-row max-w-5xl mx-auto mt-[164px] w-full items-center">
        {/* Left Column */}
        <div className="w-full md:w-1/2">
        <img
          className="rounded-2xl mx-auto mt-8 md:mt-0"
          src="/touse.svg"
          alt="Login illustration"
        />
      </div>
        <div className="w-full md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Sign Up</h2>
          {error && <p className="text-red-600 mt-2">{error}</p>}
          <p className="text-xs mt-4 text-[#002D74]">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>

          <form onSubmit={handleSignupSubmit} className="flex flex-col gap-1">
            <div className="mb-2">
              <label
                htmlFor="username"
                className="block text-gray-600 font-bold mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <p className="text-xs text-gray-500">Please enter your full name.</p>
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-gray-600 font-bold mb-1"
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
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-gray-600 font-bold mb-1"
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
              <p className="text-xs text-gray-500">Choose a strong password.</p>
            </div>
            <div className="mb-2">
              <label
                htmlFor="role"
                className="block text-gray-600 font-bold mb-1"
              >
                Role
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              >
                <option value="member">Full membership</option>
                <option value="admin">Admin</option>
              </select>
              <p className="mt-4 text-center text-xs sm:text-sm text-gray-500">
          By continuing, you agree to our <a href="#" className="text-[#FF6247] hover:underline">Terms of Service</a> and <a href="#" className="text-[#FF6247] hover:underline">Privacy Policy</a>.
        </p>
            </div>
            <button
  type="submit"
  disabled={loading}
  className="bg-gradient-to-r from-[#65cafd] via-[#0085d0] to-[#006bb3] text-white py-2 hover:scale-105 duration-300 hover:shadow-lg hover:shadow-[#65cafd] focus:outline-none"
>
  {loading ? "Signing up..." : "Sign Up"}
</button>

          </form>
        </div>

        {/* Right Column (Image) */}
        
      </div>
  
    </section>
  );
};

export default Signup;
