import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
// import App from "./App";
// import Login from "./pages/Login/LoginPage";
// import RegisterPage from "./pages/Register/RegisterPage";
// import Feed from "./component/Feed";
// import Navbar from "./component/Navbar";
// import Sidebar from "./component/Sidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: "<h1>Page Not Found</h1>"
  },
  {
    path: "/login",
    element: "<h1>LoginPage</h1>"
  },
  {
    path: "/register",
    element: "<h1>Register page</h1>"
  },
  // {
  //   path: "/",
  //   element: <App />,
  //   // errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       // exact: true,
  //       path: "/",
  //       // element: <Contact />,
  //       element: <Feed />,
  //     },
  //     {
  //       exact: true,
  //       path: "contacts/",
  //       // element: <Contact />,
  //       element: "<h1>page not found</h1>",
  //     },
  //   ],
  // },
]);
const Routes = () => { return <RouterProvider router={router} exact={true} />};

export default Routes;
