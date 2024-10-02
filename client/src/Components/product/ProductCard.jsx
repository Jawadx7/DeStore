import { Link } from "react-router-dom";
import { BiSolidStar } from "react-icons/bi";

import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product }) => {
  return (
    <div className="hover:shadow-lg rounded-lg group overflow-hidden">
      <Link>
        <img
          src={product.img}
          alt=""
          className="w-full h-[18rem] mx-auto rounded-t-lg group-hover:scale-110 transition-all duration-300"
        />
      </Link>
      <div className="p-2 cursor-default">
        <p className="text-gray-500">
          {product.name.length > 20
            ? product.name.slice(0, 17) + "..."
            : product.name}
        </p>
        <span className="flex align-center space-x-2">
          <div className="flex align-center">
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
          </div>
          (230)
        </span>
        <p>USD {product.price}</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 align-center my-2">
          <AddToCartButton />
          <Link className="w-fit text-gray-500 text-sm mt-3 flex align-center space-x-1 hover:text-black hover:underline">
            <span>From: {product.seller}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
