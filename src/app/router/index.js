import { createBrowserRouter } from "react-router-dom";
import { Layout } from "app/components";
import { Home, Salons, NotFound } from "app/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/salons",
        element: <Salons />,
      },
    ],
  },
]);

export default router;
