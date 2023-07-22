import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, e.g., send data to a backend API
    console.log("Login data:", { email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <div className="text-4xl font-bold mb-8">Login Your Account</div>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="mb-4">
          <p></p>
          <input
            className="w-64 px-4 py-2 rounded-md shadow-md focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="relative mb-4">
          <input
            className="w-64 px-4 py-2 rounded-md shadow-md focus:outline-none focus:shadow-outline"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            type="button"
            className="absolute top-0 right-0 mt-3 mr-4"
            onClick={handleShowPassword}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button
          className="w-64 px-4 py-2 bg-white text-black rounded-md shadow-md hover:shadow-lg transition duration-300"
          type="submit"
        >
          Login
        </button>
      </form>
      <div className="mt-4">
        Don't Have An Account? <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
