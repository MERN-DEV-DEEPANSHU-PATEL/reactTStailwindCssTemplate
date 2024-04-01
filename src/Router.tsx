import { createBrowserRouter } from "react-router-dom";
import Layout, { UnAuthLayout } from "./Layout";

import NotFoundPage from "./pages/404NotFoundPage";
import UserAuthPage from "./pages/UserAuthPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <UnAuthLayout />,
    children: [
      {
        path: "/auth/",
        element: <UserAuthPage />,
      },
    ],
  },
]);

export default router;
