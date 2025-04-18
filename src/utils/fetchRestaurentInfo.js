import { MENU_ALL } from "./constants";
import { useState,useEffect } from "react";

const fetchRestaurentInfo = ()=>
{
    const [listofRes , setlistofRes] = useState([]);
    const[copy, setcopy] = useState([]);
    useEffect(()=>{
        fetchData();
    } 
    ,[]);
    const fetchData = async ()=>{
        const data = await fetch(MENU_ALL);
    
        const json1 = await data.json();
        console.log(json1);
        setlistofRes(json1?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setcopy(json1?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return {listofRes,copy}
}

export default fetchRestaurentInfo;
