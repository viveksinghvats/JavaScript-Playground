import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getResMenu } from "../utils/mockData";
import Shimmer from "./Shimmer";
import useResmenu from "../utils/useResMenu";

const ResturantMenu = () => {
    const { resId } = useParams();

    const menuData = useResmenu(resId);
    if (!menuData) {
        return <Shimmer />
    }

    return (
        <div className="resturant-menu">
            <h1>{menuData?.name}</h1>
        </div>
    );
}

export default ResturantMenu;