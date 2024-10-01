import { useState } from "react";
import { BiCart, BiGift, BiHeart, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import Logo from "./logo";

const Header = () => {
  const [active, setActive] = useState("foryou");
  return (
    <header className="shadow-md fixed top-0 left-0 w-full h-16 px-[5%] flex align-center justify-between bg-white z-10">
      <Logo />
      <ul className="flex align-center space-x-10">
        <Link
          to="/"
          onClick={() => setActive("foryou")}
          className="hover:text-gray-500 cursor-pointer"
        >
          For You
        </Link>
        <Link
          to="/homefavorite"
          onClick={() => setActive("homeFav")}
          className="hover:text-gray-500 cursor-pointer"
        >
          Home Favourites
        </Link>
        <Link
          to="/fashionfinds"
          onClick={() => setActive("fashion")}
          className="hover:text-gray-500 cursor-pointer"
        >
          Fashion Finds
        </Link>
        <Link
          to="/wearables"
          onClick={() => setActive("wearables")}
          className="hover:text-gray-500 cursor-pointer"
        >
          Wearables
        </Link>
        <Link
          to="/grocery"
          onClick={() => setActive("grocery")}
          className="hover:text-gray-500 cursor-pointer"
        >
          Grocery
        </Link>
      </ul>
      <div className="flex align-center space-x-5">
        <Link className="hover:text-gray-500">
          <BiCart />
        </Link>
        <Link className="hover:text-gray-500">
          <BiGift />
        </Link>
        <Link className="hover:text-gray-500">
          <BiHeart />
        </Link>
        <Link to="/login" className="hover:text-gray-500">
          login
        </Link>
      </div>
    </header>
  );
};

export default Header;
