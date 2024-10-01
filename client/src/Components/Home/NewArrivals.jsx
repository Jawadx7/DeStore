import BigProductCard from "../product/BigProductCard";

const NewArrivals = () => {
  return (
    <>
      <h1 className="my-5 font-bold">Featured New Arrivals</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <BigProductCard />
        <BigProductCard />
        <BigProductCard />
        <BigProductCard />
      </div>
    </>
  );
};
export default NewArrivals;
