import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
import AboutPage from './pages/about';
import BlogPage from './pages/blog';
import ContactPage from './pages/contact';
import HomePage from './pages/home';
import PortfolioDetail from './component/portfolio/portfolio-detail';
import RootLayout from './pages/root-layout';
import NoMatch from './pages/no-match';
import Auth from './pages/auth';

// https://romanlavery.devcamp.space/portfolio/portfolio_items

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState('NOT_LOGGED_IN');

  const handleSuccessfulLogin = () => {
    setIsLoggedIn('LOGGED_IN');
  }

  const handleUnsuccessfulLogin = () => {
    setIsLoggedIn('NOT_LOGGED_IN');
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <NoMatch />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'about-me',
          element: <AboutPage />
        },
        {
          path: 'contact',
          element: <ContactPage />
        },
        {
          path: 'blog',
          element: <BlogPage />
        },
        {
          path: '/portfolio/:slug',
          element: <PortfolioDetail />
        },
        {
          path: '/auth',
          element: <Auth 
                    {...props} 
                    handleSuccessfulLogin={handleSuccessfulLogin} 
                    handleUnsuccessfulLogin={handleUnsuccessfulLogin} 
                  />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
