import { useContext } from "react";
import { AuthContext } from "../../../Auth Provider/AuthProvider";
import Loading from "../Pages/Shared/Loading/Loading";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading == true) {
    return <Loading />;
  } else if (user) {
    return { children };
  }
};

export default PrivetRoutes;
