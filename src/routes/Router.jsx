import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import DashboardLayout from "../layout/DashboardLayout";

import Login from "../pages/Login";
import Loading from "../components/Loading";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Register";
import AddTransaction from "../pages/AddTransaction";
import Home from "../pages/Home";
import MyTransactions from "../pages/MyTransactions";
import UpdateTransaction from "../pages/UpdateTransaction";
import TransactionDetails from "../pages/TransactionDetails";
import MyProfile from "../pages/MyProfile";
import Reports from "../pages/Reports";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    HydrateFallback: Loading,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/privacy",
        Component: PrivacyPolicy,
      },
      {
        path: "/terms",
        Component: Terms,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <MyTransactions />, // Setting this as default for now or create a DashboardHome
      },
      {
        path: "add-transaction",
        element: <AddTransaction />,
      },
      {
        path: "my-transactions",
        element: <MyTransactions />,
      },
      {
        path: "my-transactions/:id",
        element: <TransactionDetails />,
      },
      {
        path: "update-transaction/:id",
        element: <UpdateTransaction />,
      },
      {
        path: "profile",
        element: <MyProfile />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
