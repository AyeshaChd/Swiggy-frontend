// Body component
import { useEffect, useState } from "react";

import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Body = () => {
  // whenever  local state variables updates , react re-renders the whole component
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredlist, setfilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  // calling higher order function and passing to it RestauratCard
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5743545&lng=88.3628734&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);

    setListOfRestaurants(
      // optional chaining
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //
  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline.Pleasecheck your internet connection</h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  // conditional rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter flex my-5 ml-5 gap-[100px] ">
        <div className="search-box">
          <input
            type="text"
            className="search border-[1.5px]   rounded-[5px] border-black py-[3px] mr-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredList(filteredRestaurants);
            }}
            className="px-3 py-1  rounded-[5px]  border-black  bg-pink-500 text-green-50"
          >
            search
          </button>
        </div>
        <button
          className="search bg-pink-600 text-green-50  rounded-[5px] p-2  cursor-pointer"
          onClick={() => {
            const topResFilteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );

            setfilteredList(topResFilteredList);
          }}
        >
          Top rated restaurants
        </button>

        {/* updating UserContext data directly by input tag */}
        <div>
          <label className="mr-1">UserName:</label>
          <input
            type="text"
            className="border border-black rounded-[5px] p-1"
            value={loggedInUser}
            onChange={(e) => {
              console.log("hi:", e.target.value);
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="restaurants-container  mx-auto grid lg:grid-cols-4  md:grid-cols-3  min-[440px]:grid-cols-2  px-5 gap-5 ">
        {filteredlist?.map((restaurant, index) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
