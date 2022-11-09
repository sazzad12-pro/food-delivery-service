import { createBrowserRouter } from "react-router-dom";
import Home from "../component/home/Home";
import Review from "../component/Reviews/Review";
import ReviewUpdate from "../component/Reviews/ReviewUpdate";
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
        loader: () =>
          fetch("https://assignment-mu-dusky.vercel.app/allService"),
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
        element: <Review></Review>,
      },
      {
        path: "/update/:id",
        element: <ReviewUpdate></ReviewUpdate>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/review/${params.id}`),
      },
    ],
  },
]);
