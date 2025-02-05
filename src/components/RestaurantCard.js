// RestaurantCard component
// Destructure the props

import { IMAGE_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  const { deliveryTime } = resData?.info.sla;
  return (
    <div className="restaurant-card  rounded-[15px]">
      <img
        className="res-logo  rounded-t-[15px] rounded-b-[5px]  w-[300px] h-[250px]"
        src={IMAGE_URL + cloudinaryImageId}
      />

      <div className="res-info rounded-b-[15px]    bg-slate-100 p-3 text-wrap">
        <h3 className="font-bold">{name}</h3>

        <h3>{cuisines.join(",")}</h3>

        <h4>{avgRating}⭐ </h4>
        <h4>{deliveryTime} minutes</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};
// higher order function
// input -restaurant =>restaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
