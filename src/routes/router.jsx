import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import { taskDetails } from "../api/task";
import Home from "../pages/Home/Home";
import UpdateTask from "../pages/UpdateTask/UpdateTask";
import Details from "../pages/Details/Details";

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
