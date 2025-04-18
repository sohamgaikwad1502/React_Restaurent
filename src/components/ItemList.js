import { useDispatch } from "react-redux";
import { FOOD_IMAGE } from "../utils/constants";
import { addItem,clearCart } from "../utils/cartSlice";

const ItemList = ({items})=>
{
    const dispatch = useDispatch();
    const handleAddItem = (item)=>
    {
        console.log(item);
        // dispatch(clearCart());
        dispatch(addItem(item));
    }
    return(
        <div>
            {
                items.map((item)=>
                (
                    <div key={item?.card?.info?.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                        <div className="py-2 w-9/12">
                            <div className="font-medium">
                                <span className="text-lg">{item?.card?.info?.name } </span>-
                                Rs.<span>{item?.card?.info?.price / 100 }</span>
                            </div>
                            <div>
                                <p className="text-sm">{item?.card?.info?.description }</p> 
                            </div>
                        </div>
                        
                        <div className="p-4 w-3/12 relative">
                        
                        <img className="object-cover" src={FOOD_IMAGE+item?.card?.info?.imageId}/>
                        <button className=" px-4 py-1 absolute bottom-0 left-1/2  transform -translate-x-1/2 -translate-y-1/2  bg-black text-white border rounded-md font-poppins" onClick={()=>{handleAddItem(item)}}>Add+</button>
                        </div>
                    </div>
                    
                ) )
            }
        </div>
    )
}

export default ItemList;