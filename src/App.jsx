import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Preloader from "./components/layout/Preloader";
import Home from "./components/pages/Home";

const Root = lazy(() => import("./components/layout/Root"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        }
      ]
    },
  ]);

  return (
    <Suspense fallback={<Preloader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
