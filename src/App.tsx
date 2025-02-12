import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import ProductTrials from './pages/ProductTrials';
import Navbar from './components/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/solutions",
        element: <Solutions />
      },
      {
        path: "/about", 
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/careers",
        element: <Careers />
      },
      {
        path: "/trials",
        element: <ProductTrials />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;