import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantCard from "./components/ResturantCard";
import ResturantMenu from "./components/ResturantMenu";

/**
 * Header
 *    logo
 *    nav items
 * Body
 *    seach
 *    ResturantContainer
 *    ResturantCard
 * Fotter
 *    Copyright
 *    Link
 *    Address
 *    Contact
 */

const AppMain = () => {
    return (
        <div>
            <Header />
            {/** if path is = / => Body */}

            {/**if path is /about => About */}

            {/** if path is /contact => Contact */}
            <Outlet />
        </div>
    );
}


const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppMain />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            }, {
                path: '/contact',
                element: <Contact />
            }, {
                path: '/resturant/:resId',
                element: <ResturantMenu />
            }
        ],
        errorElement: <Error />
    },
])


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);