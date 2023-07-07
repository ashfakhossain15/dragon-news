import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "active text-green-300" : "")}
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
