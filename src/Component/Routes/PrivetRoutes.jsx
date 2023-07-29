import { useContext } from "react";
import { AuthContext } from "../../../Auth Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "./../Pages/Shared/Loading/Loading";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (user) {
    return children;
  } else if (loading) {
    return <Loading />;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivetRoutes;
