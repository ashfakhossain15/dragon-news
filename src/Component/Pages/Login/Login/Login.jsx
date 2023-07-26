import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../Auth Provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState("");
  const [isError, setIsError] = useState("");

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
    setIsError("");
    setIsSuccess("");
    login(email, password)
      .then((result) => {
        const logedUser = result.user;
        toast.success("User Login successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <div className="     rounded-md bg-gradient-to-r from-neutral-200 via-gray-100 to-sky-500 p-16 max-w-2xl ">
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="text-4xl font-bold mb-8 ">
            <span className="text-black opacity-60">Login Your</span>{" "}
            <span className="opacity-40 text-black">
              A<span className="text-gray-900 opacity-80">c</span>
            </span>
            <span className="opacity-70">c</span>ount
          </div>
          <div className="mb-4 ">
            <p className="text-black mb-1">Email</p>

            <input
              className="w-80 px-4 text-black py-3 rounded-md shadow-md focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="relative  mb-6 mt-4">
            <p className="text-black mb-1">Password</p>
            <input
              className="w-80  text-black px-4 py-3 rounded-md shadow-md focus:outline-none focus:shadow-outline"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              type="button"
              className="absolute top-0 right-0 text-black mt-10 mr-2"
              onClick={handleShowPassword}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button
            className=" hover:px-24 hover:bg-blue-500 hover:text-lg hover:py-4 px-8 py-2 bg-slate-700  text-white rounded-md shadow-md hover:shadow-lg transition-all duration-300"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-black">
          {" Don't Have An Account? "}
          <Link className="text-blue-600" to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
