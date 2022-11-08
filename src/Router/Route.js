import { createBrowserRouter } from "react-router-dom";
import Home from "../component/home/Home";
import Main from "../layout/Main";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
