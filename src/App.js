import { useState, useEffect, useCallback } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faSignOutAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

import AboutPage from "./pages/about";
import BlogPage from "./pages/blog";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import PortfolioDetail from "./component/portfolio/portfolio-detail";
import RootLayout from "./pages/root-layout";
import NoMatch from "./pages/no-match";
import Auth from "./pages/auth";
import PortfolioManager from "./pages/portfolio-manager";

library.add(faTrash, faSignOutAlt, faEdit);

// https://romanlavery.devcamp.space/portfolio/portfolio_items

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState("NOT_LOGGED_IN");

  const handleSuccessfulLogin = () => {
    setIsLoggedIn("LOGGED_IN");
  };

  const handleUnsuccessfulLogin = () => {
    setIsLoggedIn("NOT_LOGGED_IN");
  };

  const handleSuccessfulLogout = () => {
    setIsLoggedIn("NOT_LOGGED_IN");
  };

  const checkLoginStatus = useCallback(() => {
    return axios
      .get("https://api.devcamp.space/logged_in", { withCredentials: true })
      .then((response) => {
        const loggedIn = response.data.logged_in;
        console.log('checklogin', loggedIn, isLoggedIn);
        if (loggedIn && isLoggedIn === "LOGGED_IN") {
          return loggedIn;
        } else if (loggedIn && isLoggedIn === "NOT_LOGGED_IN") {
          setIsLoggedIn("LOGGED_IN");
        } else if (!loggedIn && isLoggedIn === "LOGGED_IN") {
          setIsLoggedIn("NOT_LOGGED_IN");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isLoggedIn]);

  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);

  //element: isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <RootLayout
          loggedInStatus={isLoggedIn}
          handleSuccessfulLogout={handleSuccessfulLogout}
        />
      ),
      errorElement: <NoMatch />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "about-me",
          element: <AboutPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "blog",
          element: <BlogPage />,
        },
        {
          path: "/portfolio/:slug",
          element: <PortfolioDetail />,
        },
        {
          path: "/portfolio-manager",
          element: isLoggedIn ? <PortfolioManager /> : <NoMatch />,
        },
        {
          path: "/auth",
          element: (
            <Auth
              {...props}
              isLoggedIn={isLoggedIn}
              handleSuccessfulLogin={handleSuccessfulLogin}
              handleUnsuccessfulLogin={handleUnsuccessfulLogin}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
