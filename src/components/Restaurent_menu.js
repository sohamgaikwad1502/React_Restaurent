import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentInfo from "../utils/useRestaurentInfo";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const Restaurent_menu = ()=>
{
    const [showIndex,setshowIndex] =  useState(null);
    const {resId} = useParams();
    const resInfo = useRestaurentInfo(resId);

    if (resInfo === null ) return <Shimmer/> ;

    const{name,areaName,avgRating,city,cloudinaryImageId,costForTwoMessage,cuisines} = resInfo?.cards[2]?.card?.card?.info;

    const acordian_data = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // console.log(acordian_data)
    
    const filtered_values = acordian_data.filter(res => res?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    // console.log(filtered_values);
    return (
        <div className="">
        <h3 className="my-6 text-3xl text-center font-bold">{name}</h3>
        <p className="font-bold text-center text-xl">{cuisines.join(", ")}</p>
        <div>
        {
            filtered_values.map((category,index)=>
            {
                return <RestaurantCategory 
                    data = {category?.card?.card} 
                    showItems={index === showIndex ? true : false }
                    setshowIndex = {(indx = index)=>{setshowIndex(indx)}}
                    key={category?.card?.card?.title} />
            })
        }
        </div>
        </div>
    )
}

export default Restaurent_menu;