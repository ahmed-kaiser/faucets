import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../layout/Root";
import FAQ from "../pages/FAQ/FAQ";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/signup',
                    element: <Signup />
                },
                {
                    path: '/faq',
                    element: <FAQ />
                }
            ]
        }
    ]);

    return(
        <RouterProvider router={router} />
    );
}

export default Routes;