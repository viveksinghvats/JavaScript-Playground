import { getMockData } from "../utils/mockData";
import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



const Body = () => {

    const [resList, setResList] = useState([]);
    const [filterList, setFilterList] = useState([]);
    const [searchText, setSearchtext] = useState('');

    useEffect(() => {
        getResData();
    }, []);

    const getResData = async () => {
        const data = await getMockData();
        setResList(data);
        setFilterList(data);
    }

    console.log("rerender");



    return resList.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" value={searchText} onChange={(e) => {
                        setSearchtext(e.target.value);
                    }}></input>
                    <button onClick={() => {
                        const flist = resList.filter(res => {
                            return res.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        setFilterList(flist);
                    }}>Search</button>
                </div>
                <div className="filter-btn">
                    <button onClick={() => {
                        setResList(resList.filter(i => i.starRating > 4));
                    }}>Filter top res</button>
                </div>
            </div>
            <div className="resturant-container">
                {
                    filterList?.map((resData, index) => <Link key={resData.id} to ={'/resturant/' + resData.id}><ResturantCard resData={{ index: index, ...resData }} /></Link>)
                }
            </div>
        </div>
    )
};

export default Body;