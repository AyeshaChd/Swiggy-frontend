import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card.card;
  // filtering the 'ItemCategory' cards
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className=" text-center mt-7  ml-5">
      <h1 className="font-bold text-2xl mb-1 ">{name}</h1>
      <p className="font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {/* categories accordions */}
      {categories.map((category, index) => (
        <div key={category.card.card.title}>
          {/* controlled component */}

          <RestaurantCategory
            data={category.card.card}
            showItems={index === showIndex ? true : false}
            // updating showIndex state variable indirectly through the children component
            // passing props - setShowIndex   as a  function
            setShowIndex={() => setShowIndex(index)}
          />
        </div>
      ))}
    </div>
  );
};
export default RestaurantMenu;
