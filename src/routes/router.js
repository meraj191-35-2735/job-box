import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../layout/Main/Main";
import About from "../components/About/About";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
