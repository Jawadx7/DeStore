import { BiPlus } from "react-icons/bi";

const AddToCartButton = () => {
  return (
    <div className="border-2 font-semibold text-gray-600 border-black rounded-[2rem] py-1 cursor-pointer flex align-center justify-center space-x-1">
      <BiPlus size={25} />
      <small>Add To Cart</small>
    </div>
  );
};
export default AddToCartButton;
