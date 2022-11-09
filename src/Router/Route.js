import { createBrowserRouter } from "react-router-dom";
import Home from "../component/home/Home";
import Main from "../layout/Main";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import AllService from "../page/service/AllService";
import ViewDetails from "../page/viewDetails/ViewDetails";

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
      {
        path: "/allservice",
        element: <AllService></AllService>,
        loader: () => fetch("http://localhost:5000/allService"),
      },
      {
        path: "/deliveryDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allService/${params.id}`),
      },
    ],
  },
]);
