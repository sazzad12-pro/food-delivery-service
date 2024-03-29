import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/Blog/Blog";
import Home from "../component/home/Home";
import NotFound from "../component/NotFond/NotFound";
import Review from "../component/Reviews/Review";
import ReviewUpdate from "../component/Reviews/ReviewUpdate";
import Main from "../layout/Main";
import Login from "../page/Login/Login";
import Order from "../page/order/Order";
import Register from "../page/Register/Register";
import AddService from "../page/service/AddService";

import ViewDetails from "../page/viewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute";

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
        path: "/deliveryDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-mu-dusky.vercel.app/allService/${params.id}`
          ),
      },
      {
        path: "/review",
        element: (
          <PrivateRoute>
            <Review></Review>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <ReviewUpdate></ReviewUpdate>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-sazzad12-pro.vercel.app/review/${params.id}`
          ),
      },
      {
        path: "/order",
        element: <Order></Order>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/addservice",
        element: <AddService></AddService>,
        loader: () =>
          fetch("https://assignment-sazzad12-pro.vercel.app/allService"),
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

/* 

{
        path: "/allservice",
        element: <AllService></AllService>,
        loader: () => fetch("http://localhost:5000/allService"),
      },

*/
