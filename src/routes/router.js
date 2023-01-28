import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../layout/Main/Main";
import About from "../components/About/About";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import UserDashboard from "../components/Dashboard/UserDashboard";
import RegisterRole from "../components/RegisterRole/RegisterRole";
import RequireAuth from "../components/RequireAuth/RequireAuth";
import RegisterUser from "../components/RegisterRole/RegisterUser";

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
        path: "dashboard",
        element: <UserDashboard></UserDashboard>,
      },
      {
        path: "registerRole",
        element: (
          <RequireAuth>
            <RegisterRole></RegisterRole>
          </RequireAuth>
        ),
      },
      {
        path: "register/:role",
        element: (
          <RequireAuth>
            <RegisterUser></RegisterUser>
          </RequireAuth>
        ),
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
