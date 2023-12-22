import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import { taskDetails } from "../api/task";
import Home from "../pages/Home/Home";
import UpdateTask from "../pages/UpdateTask/UpdateTask";
import Details from "../pages/Details/Details";
import AboutSection from "../pages/AboutSection/AboutSection";
import FeaturesSection from "../pages/FeaturesSection/FeaturesSection";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutSection></AboutSection>,
      },
      {
        path: "/features",
        element: <FeaturesSection></FeaturesSection>,
      },
      {
        path: "/updateTask/:id",
        element: <UpdateTask></UpdateTask>,
        loader: ({ params }) => taskDetails(params.id),
      },
      {
        path: "/taskDetails/:id",
        element: <Details></Details>,
        loader: ({ params }) => taskDetails(params.id),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
]);
