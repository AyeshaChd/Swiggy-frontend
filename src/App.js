import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css"; //jljkjlkjllkjlkjl
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, useState, useEffect, Suspense } from "react";
// import Grocery from "./components/Grocery";--lazy loading
const Grocery = lazy(() => import("./components/Grocery"));
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

// AppLayout
const AppLayout = () => {
  // how to modify  react context info in our app with the new info
  const [userName, setUserName] = useState();
  //authentication

  useEffect(() => {
    //make an api call and send username and password and get data .
    const data = {
      name: "Ayesha Chaudhary",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      {/* // wrapping our app in context.Provider and passing the value we want to
      // update/override in our whole app */}
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app-layout">
          <Header />

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
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],

    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
