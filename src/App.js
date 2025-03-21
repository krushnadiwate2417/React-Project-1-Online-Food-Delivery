import React, { lazy, Suspense, useEffect, useState } from "react";
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
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import Cart from "./components/Cart";
import MindCards from "./components/MindCards";
import Billing from "./components/Billing";
import LoginForm from "./components/LoginForm";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    //Fecth Api
    const data = {
      name: "Krushna",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedIn: userName, setUserName }}>
        <div className="app">
          <Head />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/mindFood/:foodid",
        element: <MindCards />,
      },
      {
        path: "/billing",
        element: <Billing />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
