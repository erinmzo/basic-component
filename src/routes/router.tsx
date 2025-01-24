import { createBrowserRouter } from "react-router-dom";
import Hero from "../components/main/Hero";
import Feature from "../page/Feature";
import Home from "../page/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <Hero />,
      },
      {
        path: "/:feature",
        element: <Feature />,
      },
    ],
  },
]);
