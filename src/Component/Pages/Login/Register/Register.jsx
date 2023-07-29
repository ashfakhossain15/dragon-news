import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../Auth Provider/AuthProvider";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const { createUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleEmailChange = (e) => {
    return setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    return setName(e.target.value);
  };
  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (name == "") {
      return toast.error("Enter your Name");
    } else if (image == "") {
      return toast.error("Enter your  Image");
    } else if (email == "") {
      return toast.error("Enter your email address");
    } else if (password == "") {
      return toast.error("Enter your Password");
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Your account has created.");
      })
      .catch((error) => {
        console.log(error.message);
      });

    // Here, you can perform your registration logic using the formData state.
  };

  return (
    <div className=" w-full h-full bg-slate-100 text-black p-8">
      <div className="container max-w-xl bg-white  px-16 py-10 mx-auto">
        <h1 className="text-3xl font-bold text-center  mb-8">
          Register Your Account
        </h1>
        <hr className="my-6" />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your "
              className="w-full px-3 py-3 bg-slate-200 border-2  rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="imageUrl" className="block mb-2">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={image}
              onChange={handleImageChange}
              placeholder="Enter your "
              className="w-full px-3 py-3 bg-slate-200 border-2  rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your Email"
              className="w-full px-3 py-3 bg-slate-200 border-2  rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your Password "
              className="w-full px-3 py-3 bg-slate-200 border-2  rounded-lg"
            />
          </div>
          <div className=" flex justify-center ">
            <button
              type="submit"
              className="bg-black transition-all hover:px-28 text-white py-2 px-4 rounded hover:bg-gray-800 duration-500"
            >
              Register
            </button>
          </div>
        </form>
        <p className="mt-4">
          Have An Account?
          <Link className="text-blue-600 ml-2" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
