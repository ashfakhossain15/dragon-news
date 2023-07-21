import Logo from "/logo.png";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import HeaderNav from "../Header Nav/HeaderNav";

const Header = () => {
  return (
    <div>
      <div className="grid justify-center text-center mt-6 space-y-5 ">
        <img src={Logo} alt="" />
        <h3 className="opacity-50">Journalism Without Fear or Favour</h3>
        <p>{moment().format("dddd MMMM DD YYYY")}</p>
      </div>
      <div className="max-w-5xl mx-auto flex p-3 bg-slate-100 mt-3 space-x-4 rounded-lg">
        <button className="bg-red-500 py-2 px-4 rounded-sm ">Latest</button>
        <Marquee pauseOnHover speed={30} className="text-orange-900" >
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      <div className="">
        <HeaderNav />
      </div>
    </div>
  );
};

export default Header;
