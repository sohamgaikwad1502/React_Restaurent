import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItems,setshowIndex})=>
{
    // const [state,setshowItems] = useState({showItems:false,arrow:"🔽"});
    const handleClick = ()=>
    {
        // const arrow_change = state.arrow === "🔼" ? "🔽" : "🔼";
        showItems ? setshowIndex(null) : setshowIndex();
        
    }   
    
    return (
        <div>
            <div className="w-7/12 mx-auto my-4 bg-gray-100 shadow-lg ">
                <div className="flex justify-between cursor-pointer"  onClick={handleClick}>
                    <span className="font-bold text-lg ">{data.title}  ({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>
                {showItems && <ItemList items = {data.itemCards}></ItemList>}
            </div>
            
            
        </div>
        
    )
}

export default RestaurantCategory;