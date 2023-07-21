import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../../Layouts/Main";
import NewsLayout from "../../Layouts/NewsLayout";
import Category from "../Pages/Home/Category";
import News from "../Pages/News/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:id",
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
