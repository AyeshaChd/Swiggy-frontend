import { addItem } from "../utils/cartSlice";
import { IMAGE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className=" border-gray-300 border-b-[1.5px] m-2 p-2 text-left   mt-3 flex justify-between  "
        >
          <div className="  w-9/12 mb-3 flex flex-col">
            <span className="font-bold">{item.card.info.name}</span>
            <span className="mt-3 text-xs font-bold">
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <div className="text-xs my-2 ">
              <p>{item.card.info.description}</p>
            </div>
          </div>

          <div className="w-3/12 p-4 ">
            <div className="absolute">
              <button
                className="text-xs bg-black  text-white p-1 rounded mx-8  "
                onClick={() => handleAddItem(item)}
              >
                Add+
              </button>
            </div>
            <img
              src={IMAGE_URL + item.card.info.imageId}
              className=" w-full h-20 rounded "
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
