import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import ProductTrials from "./pages/ProductTrials";
import Navbar from "./components/Navbar";

const SplashScreen = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (redirect) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Door */}
        <div className="absolute right-0 h-60 w-2/3 bg-black border-l-4 border-white z-20 animate-[door-open_3s_ease-in-out_forwards]"></div>

        {/* Logo container */}
        <div className="relative z-10">
          <div className="animate-[slide-in_2s_ease-in-out_forwards]">
            <img src="/coreshield.png" alt="Logo" className="w-60 h-32" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          0% {
            transform: translateX(200%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes door-open {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

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
    element: <SplashScreen />,
    errorElement: <h1>Oops! Page not found.</h1>,
  },
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>Oops! Something went wrong.</h1>,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "solutions",
        element: <Solutions />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "careers",
        element: <Careers />,
      },
      {
        path: "trials",
        element: <ProductTrials />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
