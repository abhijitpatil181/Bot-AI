import { createBrowserRouter, Navigate } from "react-router-dom";
import { History, Home } from "../pages";
import LayoutOutlet from "./routes/LayoutOutlet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutOutlet />,
    children: [
      {
        index: true,
        element: <Navigate to="home" />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "history",
        element: <History />,
      },
    ],
  },
]);

export default router;
