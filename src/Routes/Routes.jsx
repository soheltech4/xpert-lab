import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AllInstructor from "../pages/Home/All Instructor/AllInstructor";
import AllCourse from "../pages/Home/All Courses/AllCourse";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/allcourse",
          element: <AllCourse></AllCourse>,
        },
        {
          path: "/AllInstructor",
          element: <AllInstructor></AllInstructor>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        }
      ]
    },
  ]);