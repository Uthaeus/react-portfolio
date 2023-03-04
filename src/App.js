import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
import AboutPage from './pages/about';
import BlogPage from './pages/blog';
import ContactPage from './pages/contact';
import HomePage from './pages/home';
import RootLayout from './pages/root-layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
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
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
