import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header render");

  const onlineStatus = useOnlineStatus();
  
  // subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header flex flex-col md:flex-row justify-between px-10 my-2">
      <div className="logo-container">
        <Link to="/">
          <img className="logo w-20" src={LOGO_URL} alt="Logo" />
        </Link>
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex flex-col justify-center items-center md:flex-row p-5 space-y-2 md:space-x-5">
          {/* <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li> */}
            <li className="md:items-center mt-2">
              <Link to="/">Home</Link>
            </li>
            <li className="md:items-center">
              <Link to="/about">About Us</Link>
            </li>
            <li className="md:items-center">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="md:items-center">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="md:items-center px-4 font-bold text-xl">
              <Link to="/cart">🛒{`(${cartItems.length})`}</Link>
            </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
