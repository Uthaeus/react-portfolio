import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
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
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
