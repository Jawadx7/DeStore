import Header from "../../Components/common/Header";
import { products } from "../../assets/Data/products";
import ProductCard from "../../Components/product/ProductCard";
import NewArrivals from "../../Components/Home/NewArrivals";
import BestSellers from "../../Components/Home/BestSellers";
import AboutUs from "../../Components/Home/AboutUs";

const ForYou = () => {
  return (
    <>
      <Header />
      <main className="mt-24 px-2 md:px-5 py-5">
        <h1 className="my-5 font-bold">Suggested For You</h1>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>

        <NewArrivals />
      </main>

      <BestSellers />

      <AboutUs />
    </>
  );
};
export default ForYou;
