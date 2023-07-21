import {
  FaGoogle,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import QZone from "../Q-zone/Q-zone";
const RightNav = () => {
  return (
    <div className=" ">
      <div>
        <h1 className="font-bold text-xl mb-4">Login With</h1>
        <div className="space-y-3">
          <button className="flex items-center bg-white border-2 border-sky-400 rounded-md p-1 w-56 justify-center transition-colors duration-300 hover:bg-gradient-to-r from-blue-500 to-purple-500 ">
            <FaGoogle className="mx-2" /> Login with Google
          </button>
          <button className="flex items-center border-2 border-slate-500 rounded-md p-1  w-56 justify-center  ">
            <FaGithub className="mx-2" /> Login with Github
          </button>
        </div>
      </div>
      <section>
        <h1 className="py-7 font-semibold text-lg">Find Us On </h1>
        <div className="flex flex-col">
          <Link
            className="flex items-center justify-start border-2 px-5 py-3 rounded-t-md"
            to=""
          >
            <div className="p-2 mr-2 rounded-full bg-slate-300">
              <FaFacebook className=" text-sky-700 " />
            </div>
            Facebook
          </Link>
          <Link
            className="flex items-center justify-start border-2 px-5 py-3"
            to=""
          >
            <div className="p-2  mr-2 rounded-full bg-slate-300">
              <FaTwitter className="  text-sky-700" />
            </div>
            Twitter
          </Link>
          <Link
            className="flex items-center justify-start border-2 px-5 py-3 rounded-b-md"
            to=""
          >
            <div className="p-2 mr-2 rounded-full bg-slate-300">
              <FaInstagram className=" text-rose-500" />
            </div>
            Instagram
          </Link>
        </div>
      </section>

      <section>
        <QZone />
      </section>
      <div className="relative ">
        <img className="rounded-sm" src="/bg.png" alt="" />
        <section className="absolute top-0 text-center mx-auto text-white space-y-10 px-5 py-24">
          <h1 className="text-2xl font-bold">Create an Amazing Newspaper</h1>
          <p>
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <button className="bg-red-500 px-4 py-3 mx-auto">Lean More</button>
        </section>
      </div>
    </div>
  );
};

export default RightNav;
