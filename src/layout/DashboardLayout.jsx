import React, { useContext, useEffect } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Loading from "../components/Loading";
import { FaChartPie, FaHome, FaList, FaPlus, FaUser } from "react-icons/fa";

const DashboardLayout = () => {
  const { user, handleSignout, loading, theme, setTheme } =
    useContext(AuthContext);
  const navigate = useNavigate();

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

  if (loading) return <Loading />;

  // Sidebar Menu Items
  const menuItems = (
    <>
      <li className="mb-2">
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
              isActive
                ? "bg-primary text-primary-content font-bold shadow-md"
                : "hover:bg-base-300 font-medium"
            }`
          }
        >
          <FaHome className="text-xl" />
          <span>Overview</span>
        </NavLink>
      </li>
      <li className="mb-2">
        <NavLink
          to="/dashboard/add-transaction"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
              isActive
                ? "bg-primary text-primary-content font-bold shadow-md"
                : "hover:bg-base-300 font-medium"
            }`
          }
        >
          <FaPlus className="text-xl" />
          <span>Add Transaction</span>
        </NavLink>
      </li>
      <li className="mb-2">
        <NavLink
          to="/dashboard/my-transactions"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
              isActive
                ? "bg-primary text-primary-content font-bold shadow-md"
                : "hover:bg-base-300 font-medium"
            }`
          }
        >
          <FaList className="text-xl" />
          <span>My Transactions</span>
        </NavLink>
      </li>
      <li className="mb-2">
        <NavLink
          to="/dashboard/reports"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
              isActive
                ? "bg-primary text-primary-content font-bold shadow-md"
                : "hover:bg-base-300 font-medium"
            }`
          }
        >
          <FaChartPie className="text-xl" />
          <span>Reports</span>
        </NavLink>
      </li>
      <li className="mb-2">
        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
              isActive
                ? "bg-primary text-primary-content font-bold shadow-md"
                : "hover:bg-base-300 font-medium"
            }`
          }
        >
          <FaUser className="text-xl" />
          <span>My Profile</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col min-h-screen bg-base-200">
        {/* Top Navbar */}
        <div className="w-full navbar bg-base-100/90 backdrop-blur-md sticky top-0 z-20 shadow-sm px-4">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="dashboard-drawer"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <Link
              to="/dashboard"
              className="text-xl font-bold lg:hidden"
            >
              FinTrack
            </Link>
          </div>
          <div className="flex-none gap-4">

            {/* Profile Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar border border-base-300"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src={
                        user?.photoURL
                        ? user.photoURL
                        : `https://img.icons8.com/?size=100&id=fUUEbUbXhzOA&format=png&color=${
                            theme ? "ffffff" : "000000"
                            }`
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52 border border-base-200"
              >
                <li>
                  <Link to="/dashboard/profile" className="justify-between py-2">
                    Profile
                    <span className="badge badge-sm badge-primary">New</span>
                  </Link>
                </li>
                <li>
                    <Link to="/" className="py-2">Home Page</Link>
                </li>
                <div className="divider my-1"></div>
                <li>
                  <button onClick={handleSignout} className="py-2 text-error">Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-4 lg:p-8 flex-1 w-full max-w-7xl mx-auto">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-40">
        <label
          htmlFor="dashboard-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content border-r border-base-300">
          {/* Sidebar Brand/Logo Area */}
          <div className="mb-8 px-4 mt-2">
             <Link to="/" className="text-3xl font-black tracking-tighter text-primary">FinTrack</Link>
          </div>
          
          <div className="flex flex-col gap-1">
            {menuItems}
          </div>
          
          <div className="mt-auto p-2">
            <div className="flex items-center gap-3 px-4 mb-4">
               <span className="text-sm font-medium">Theme</span>
               <input
                    type="checkbox"
                    value="synthwave"
                    className="toggle theme-controller"
                    defaultChecked={theme}
                    onChange={(e) => handleTheme(e.target.checked)} />
            </div>
             <div className="divider my-0"></div>
             <button onClick={handleSignout} className="btn btn-ghost w-full justify-start gap-3 px-4 text-error mt-2">
                Log out
             </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
