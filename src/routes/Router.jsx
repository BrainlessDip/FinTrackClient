import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import App from "./../App";
import Login from "../pages/Login";
import Loading from "../components/Loading";
import PrivateRoute from "./PrivateRoute";

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
            <h1>hi</h1>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);
