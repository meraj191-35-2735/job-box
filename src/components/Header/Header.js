import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/images/logo/jobStation.png";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { logout } from "../../features/auth/authSlice";
import auth from "../../firebase/firebase.config";

const Header = () => {
  const { email, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    await signOut(auth).then(() => dispatch(logout()));
  };

  return (
    <div className="navbar  bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="font-semibold font-serif" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="font-semibold font-serif" to="/home">
                Jobs
              </Link>
            </li>
            {email && (
              <li>
                <Link className="font-semibold font-serif" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            )}
            <li>
              <Link className="font-semibold font-serif" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="w-16 h-10" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="font-semibold font-serif" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="font-semibold font-serif" to="/home">
              Jobs
            </Link>
          </li>
          {email && role && (
            <li>
              <Link className="font-semibold font-serif" to="/dashboard">
                Dashboard
              </Link>
            </li>
          )}
          {email && !role && (
            <li>
              <Link className="font-semibold font-serif" to="/registerRole">
                Register
              </Link>
            </li>
          )}
          <li>
            <Link className="font-semibold font-serif" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {email ? (
          <button
            onClick={handleSignOut}
            className="btn btn-outline btn-sm font-serif font-semibold"
          >
            Log Out
          </button>
        ) : (
          <Link
            to="login"
            className="btn btn-outline btn-sm font-serif font-semibold"
          >
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
