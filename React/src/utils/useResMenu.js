import { useEffect, useState } from "react";
import { getResMenu } from "./mockData";

const useResmenu = (resId) => {
    const [resData, setResData] = useState(null);
    useEffect(() => {
        fetchResData();
    }, []);

    const fetchResData = async () => {
        const data = await getResMenu(resId);
        setResData(data);
    };

    return resData;
};

export default useResmenu;