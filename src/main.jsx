import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Root from "./Layout/Root.jsx";
import Errorpage from "./Components/ErrorPage/Errorpage.jsx";
import AddCraftItem from "./Components/AddCraftsItem/AddCraftItem.jsx";
import Home from "./Components/Home/Home.jsx";
import Register from "./Components/Register/Register.jsx";
import Login from "./Components/Login/Login.jsx";
import AuthProviders from "./Components/Providers/AuthProviders.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import CraftCardDetails from "./Components/CraftCardDetails/CraftCardDetails.jsx";
import AllCrafts from "./Components/AllCrafts/AllCrafts.jsx";
import MyWishList from "./Components/MyWishList/MyWishList.jsx";
import UpdateCraftItem from "./Components/UpdateCraftItem/UpdateCraftItem.jsx";
<link rel="stylesheet" href="bower_components/aos/dist/aos.css" />;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://m-57-assignment-10-craftster-server.vercel.app/addCraftItem"),
      },
      {
        path: "/allCrafts",
        element: <AllCrafts></AllCrafts>,
        loader: () => fetch("https://m-57-assignment-10-craftster-server.vercel.app/addCraftItem"),
      },
      {
        path: "/addCraftItem",
        element: (
          <PrivateRoute>
            <AddCraftItem></AddCraftItem>
          </PrivateRoute>
        ),
        loader: () => fetch("https://m-57-assignment-10-craftster-server.vercel.app/"),
      },
      {
        path: "/myWishList",
        element: <PrivateRoute><MyWishList></MyWishList></PrivateRoute>,
        loader: () => fetch("https://m-57-assignment-10-craftster-server.vercel.app/addCraftItem"),
      },
      {
        path: "/register",
        element: <Register></Register>,
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
        path: "/craftCardDetails/:_id",
        element: (
          <PrivateRoute>
            <CraftCardDetails></CraftCardDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://m-57-assignment-10-craftster-server.vercel.app/${params._id}`),
      },
      {
        path: "/updateCraftItem/:id",
        element: (
          <PrivateRoute>
            <UpdateCraftItem></UpdateCraftItem>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://m-57-assignment-10-craftster-server.vercel.app/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProviders>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
  </AuthProviders>
);
