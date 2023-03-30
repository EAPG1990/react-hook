import { createBrowserRouter } from "react-router-dom";
import { AboutPage,ErrorPage, HomePage, LoginPage, MainPage } from "../09-useContext";
 
export const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage/>,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "home",
                    element: <HomePage/>,
                },
                {
                    path: "login",
                    element: <LoginPage/>,
                },
                {
                    path: "about",
                    element: <AboutPage/>,
                },
            ]
        }
    ]);
 
  return router;
}