import { FOOD_IMAGE } from "../utils/constants";
const Restaurent_cart = (props) =>
    {
        const {resInfo} = props;
        console.log(resInfo)
        const{name,cuisines,avgRating,locality,cloudinaryImageId} = resInfo?.info;
        
        return (
            
            <div className="p-4 w-[250px] h-[400px] flex flex-wrap justify-center bg-orange-300 hover:bg-orange-400">
                <div className="">
                    <img className=" h-[210px] object-cover mb-1" src=
                    {FOOD_IMAGE+cloudinaryImageId}/>
                        
                </div>
                <div className="">
                    <h3 className="font-bold">{name}</h3>
                    <h4 className="cusines">
                        {cuisines.join(", ")}
                    </h4>
                    <h4 className="rating">{avgRating} stars</h4>
                    <h4 className="locality"> {locality}</h4>
                </div>
            </div>
        )
}

export const RestaurentWithDiscountInfo = (Restaurent_cart) =>
{
    return (props)=>
    {
        
        const discountInfoprops = props.resInfo.info.aggregatedDiscountInfoV3;
        return(<div>
            <label className="absolute bg-orange-600 text-white m-2 p-2 rounded-lg">{discountInfoprops.header + " " + discountInfoprops.subHeader}</label>
            <Restaurent_cart {...props} />
            
        </div>)
    }
}

export default Restaurent_cart;
