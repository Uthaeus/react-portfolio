import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
import AboutPage from './pages/about';
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
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
