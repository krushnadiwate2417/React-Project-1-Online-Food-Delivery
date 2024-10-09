import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Head from "./components/Head";
import Body from "./components/Body";
import Foot from "./components/Foot";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Head />
      <Outlet />
      <Foot />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestroMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
