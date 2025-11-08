import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Container from "./Container";

const Navbar = () => {
  const { user, handleSignout } = useContext(AuthContext);
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("dark")));

  const handleTheme = (isChecked) => {
    setTheme(isChecked);
  };

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(theme));
    document.documentElement.setAttribute(
      "data-theme",
      theme ? "dark" : "light"
    );
  }, [theme]);

  const links = (
    <>
      <li>
        <NavLink to={"/"} className="text-[20px]">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/feedback"} className="text-[20px]">
          Add Transaction
        </NavLink>
      </li>
      <li>
        <NavLink to={"/feedback"} className="text-[20px]">
          My Transactions
        </NavLink>
      </li>
      <li>
        <NavLink to={"/feedback"} className="text-[20px]">
          Reports
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            FinTrack
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  {user.photoURL ? (
                    <img src={user.photoURL} />
                  ) : (
                    <img src="https://img.icons8.com/?size=100&id=fUUEbUbXhzOA&format=png&color=ffffff" />
                  )}
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 shadow"
              >
                <div className="flex justify-center items-center flex-col gap-3 p-2">
                  <label className="flex cursor-pointer gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="5" />
                      <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <input
                      type="checkbox"
                      value="synthwave"
                      className="toggle theme-controller"
                      defaultChecked={theme}
                      onChange={(e) => {
                        handleTheme(e.target.checked);
                      }}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                  </label>
                  <a className="justify-between font-bold">{user.email}</a>
                  <li>
                    <a
                      className="justify-between text-2xl"
                      onClick={() => {
                        handleSignout();
                      }}
                    >
                      Log out
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-3">
              <Link to={"/login"} className="btn btn-success rounded-full">
                Login
              </Link>
              <Link to={"/register"} className="btn btn-success rounded-full">
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
