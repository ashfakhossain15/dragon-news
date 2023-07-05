import ActiveLink from "../../../Active Link/ActiveLink";
import Logo from "../../../../assets/logo.png";
import moment from "moment/moment";

const Header = () => {
  return (
    <div className="grid justify-center text-center mt-6 space-y-5">
      {/* <ActiveLink to="/">Home</ActiveLink> */}
      <img src={Logo} alt="" />
      <h3 className="opacity-50">
        Journalism Without Fear or Favour
      </h3>
      <p>{moment().format("dddd MMMM DD YYYY")}</p>
    </div>
  );
};

export default Header;
