import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import App from "./../App";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: App,
      },
    ],
  },
]);
