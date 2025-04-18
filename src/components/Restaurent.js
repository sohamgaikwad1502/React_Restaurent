import {useEffect, useState } from "react"
import Shimmer from "./Shimmer";

const Restaurent = ()=>
{
    
    const [resData,setresData] = useState(null);
    useEffect(()=>
        {
            data();
        },[])

    const data = async()=>
    {
        const info = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.9974533&lng=73.78980229999999&restaurantId=92483&catalog_qa=undefined&submitAction=ENTER")
        const info1 = await info.json();
        console.log(info1)
        setresData(info1?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);

    }

    return !resData ? <Shimmer/> : 
    (<div>
        
        <div>{resData.map((res)=>
        {
            return (<p>{res.card.info.name
            }</p>)

            
        })}</div>
        <p>Details</p>
    </div>)
}

export default Restaurent;