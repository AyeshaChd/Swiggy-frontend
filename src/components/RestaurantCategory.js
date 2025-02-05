import arrow from "../utils/images/arrow.png";
import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCatogery = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div
      className=" w-6/12  align-text-center m-auto  p-4 my-4 shadow-lg  bg-gray-200 cursor-pointer "
      onClick={handleClick}
    >
      {/* accordion header */}
      <div className="flex justify-between font-bold ">
        <h1>
          {data.title}({data.itemCards.length})
        </h1>
        <span>
          <img className="w-4" src={arrow} />
        </span>
      </div>
      {/* accordion body */}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCatogery;
