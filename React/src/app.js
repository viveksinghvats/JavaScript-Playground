import React from "react";
import ReactDOM from "react-dom/client";
import Header  from "./components/Header";
import Body from "./components/Body";

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
            <Body />
        </div>
    );
}



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppMain />);