import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Preloader from "./components/layout/Preloader";

const Root = lazy(() => import("./components/layout/Root"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
  ]);

  return (
    <Suspense fallback={<Preloader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
