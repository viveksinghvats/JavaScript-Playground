import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getResMenu } from "../utils/mockData";
import Shimmer from "./Shimmer";

const ResturantMenu = () => {
    const [menuData, setMenuData] = useState();
    const resId = useParams();

    useEffect(() => {
        fetchMenuData();
    }, []);

    async function fetchMenuData() {
        const menu = await getResMenu(resId.resId);
        setMenuData(menu);
    }
    if(!menuData){
        return <Shimmer/>
    }

    return (
        <div className="resturant-menu">
            <h1>{menuData.name}</h1>
        </div>
    );
}

export default ResturantMenu;