import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import NewsLayout from "../../Layouts/NewsLayout";
import Category from "../Pages/Home/Category";
import News from "../Pages/News/News";
import RegisterPage from "../Pages/Login/Register/Register";
import LoginLayout from "./../../Layouts/LoginLayout";
import Login from "../Pages/Login/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0" />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },

  {
    path: "/category",
    element: <Main />,
    children: [
      {
        path: ":id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5500/categories/${params.id}`).then(
            (response) => response.json()
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: <News />,
        loader: ({ params }) =>
          fetch(`http://localhost:5500/news/${params.id}`).then((response) =>
            response.json()
          ),
      },
    ],
  },
]);

export default router;
