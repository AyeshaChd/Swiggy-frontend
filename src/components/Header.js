import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { useSelector } from "react-redux";

import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { Link } from "react-router";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");
  const onlineStatus = useOnlineStatus();
  //using a react context
  const { loggedInUser } = useContext(UserContext);
  //subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header bg-pink-700 text-white  flex justify-between  mx-2 px-5 border-[1px] border-solid border-black">
      <div className="logo-container flex  items-center">
        <img className=" w-[100px] h-[90px] " src={LOGO_URL} alt=" an img" />
        <h1 className="text-white font-bold text-2xl ">SwiftBite</h1>
      </div>
      <div className="nav-items text-white">
        <ul className=" flex mt-8">
          <li className="px-6">Online Status :{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-6 ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-6">
            <Link to="/About">About Us</Link>
          </li>
          <li className="px-6">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="px-6">
            <Link to="/Grocery">Grocery</Link>
          </li>

          <button
            className="btnName border-[0.5px] border-white px-[4px] py-[1px] rounded-[5px] mt-0"
            onClick={() => {
              btnNameReact === "login"
                ? setBtnNameReact("logout")
                : setBtnNameReact("login");
            }}
          >
            {btnNameReact}
          </button>

          <li className="px-4">
            <Link to="/Cart"> Cart-({cartItems.length})items</Link>
          </li>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
