import { Outlet } from "react-router-dom";
import HeaderNav from "../Component/Pages/Shared/Header Nav/HeaderNav";

const LoginLayout = () => {
  return (
    <div>
      <HeaderNav />
      <Outlet />
    </div>
  );
};

export default LoginLayout;
