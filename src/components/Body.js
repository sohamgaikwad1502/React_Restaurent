import Restaurent_cart, { RestaurentWithDiscountInfo } from "./Restaurent_card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

// data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info.aggregatedDiscountInfoV3
const Body = () => {
  const [listofRes, setlistofRes] = useState([]);
  const [copy, setcopy] = useState([]);
  const [searchText, setSearchText] = useState("");
  const CardWithDiscountInfo = RestaurentWithDiscountInfo(Restaurent_cart);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.00240&lng=73.79450&is-seo-homepage-enabled=true&page_type"
    );

    const json1 = await data.json();
    console.log(json1);
    setlistofRes(
      json1?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setcopy(
      json1?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listofRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter">
        <input
          className="border border-solid border-black"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-5 py-1 bg-green-100 m-4 rounded-lg"
          onClick={() => {
            const updated_lst1 = listofRes.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setcopy(updated_lst1);
          }}
        >
          Search
        </button>

        <button
          className="px-5 py-1 bg-green-100 m-4"
          onClick={() => {
            const updated_res = listofRes.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setcopy(updated_res);
            console.log("changed");
            console.log(updated_res);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="flex flex-wrap">
        {copy.map((restaurant) => {
          return (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
              className="inline-block m-2 p-4"
            >
              {" "}
              {restaurant.info.aggregatedDiscountInfoV3 ? (
                <CardWithDiscountInfo resInfo={restaurant} />
              ) : (
                <Restaurent_cart resInfo={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
