import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import App from "./../App";
import Login from "../pages/Login";
import Loading from "../components/Loading";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Register";
import AddTransaction from "../pages/AddTransaction";
import Home from "../pages/Home";
import MyTransactions from "../pages/MyTransactions";
import UpdateTransaction from "../pages/UpdateTransaction";
import TransactionDetails from "../pages/TransactionDetails";

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
        path: "/add-transaction",
        element: (
          <PrivateRoute>
            <AddTransaction />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-transaction/:id",
        element: (
          <PrivateRoute>
            <UpdateTransaction />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-transactions",
        element: (
          <PrivateRoute>
            <MyTransactions />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-transactions/:id",
        element: (
          <PrivateRoute>
            <TransactionDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
