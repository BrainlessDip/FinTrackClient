import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import App from "./../App";
import Login from "../pages/Login";
import Loading from "../components/Loading";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Register";
import AddTransaction from "../pages/AddTransaction";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        index: true,
        Component: App,
      },
      {
        path: "/add-transaction",
        element: (
          <PrivateRoute>
            <AddTransaction></AddTransaction>
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
