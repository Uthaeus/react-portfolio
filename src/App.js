import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
import AboutPage from './pages/about';
import BlogPage from './pages/blog';
import ContactPage from './pages/contact';
import HomePage from './pages/home';
import PortfolioDetail from './component/portfolio/portfolio-detail';
import RootLayout from './pages/root-layout';
import NoMatch from './pages/no-match';

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
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
