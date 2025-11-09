import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import ErrorPage from '../Pages/ErrorPage';
import AppsDetails from "../Pages/AppsDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
      {
        path: "/app/:id",
        element: <AppsDetails />,
      },

    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default router;
