import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import NotFound from "../pages/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default routes;
