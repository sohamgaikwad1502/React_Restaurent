import { useEffect,useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurentInfo = (resId)=> 
{
    const [resInfo , setresinfo] = useState(null);

    useEffect(()=>
    {
        fetchInfo();
    },[])

    const fetchInfo = async ()=> 
    {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();

        setresinfo(json.data);
    }   

    return resInfo;
}

export default useRestaurentInfo;