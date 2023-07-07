import ActiveLink from "../../../Active Link/ActiveLink";
import unknownImg from "/Unknown_person.jpg";
import { Link } from "react-router-dom";
const HeaderNav = () => {
  return (
    <div className="flex items-center justify-between py-5 px-24">
      <span></span>
      <section className="flex justify-center space-x-14">
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/about">About</ActiveLink>
        <ActiveLink to="/career">Career</ActiveLink>
      </section>

      <section className="flex justify-end space-x-4">
        <img src={unknownImg} alt="" className="w-8 rounded-full" />
        <div className="flex items-center">
          <button className="bg-black rounded-sm py-1 px-6  text-white">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeaderNav;
