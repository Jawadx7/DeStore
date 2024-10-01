import Hoodie from "../../assets/product_imgs/hoodie.webp";
import HeartOver from "./HeartOver";

const BigProductCard = () => {
  return (
    <div className="relative">
      <HeartOver />
      <img src={Hoodie} alt="product-image" className="w-full" />
      <span className="absolute bottom-3 left-3 bg-white py-1 px-3 rounded-[2rem]">
        USD 24.99
      </span>
    </div>
  );
};
export default BigProductCard;
