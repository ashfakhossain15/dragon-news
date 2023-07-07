import {
  FaGoogle,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const RightNav = () => {
  return (
    <div className=" ">
      <div>
        <h1 className="font-bold text-xl mb-4">Login With</h1>
        <div className="space-y-3">
          <button className="flex items-center border-2 border-sky-400 rounded-md p-1 w-56 justify-center">
            <FaGoogle className="mx-2" /> Login with Google
          </button>
          <button className="flex items-center border-2 border-slate-500 rounded-md p-1  w-56 justify-center">
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
      <section className="my-7 bg-slate-200 rounded-md">
        <h1 className="p-2 ms-3 font-bold text-xl space-y-5">Q - Zone</h1>
        <div className="space-y-9">
          <img src="/qZone1.png" alt="" />
          <img src="/qZone2.png" alt="" />
          <img src="/qZone3.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default RightNav;
