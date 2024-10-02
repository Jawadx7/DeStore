import hoodie from "../../assets/product_imgs/hoodie.webp";
import tableCloth from "../../assets/product_imgs/table-cloth.webp";
import cap from "../../assets/product_imgs/cap.webp";

import { Link } from "react-router-dom";
import { BiArrowToRight } from "react-icons/bi";

const BestSellers = () => {
  const sellers = [
    {
      id: 1,
      name: "Mira's Clothes",
      img: hoodie,
    },
    {
      id: 2,
      name: "Day Vibes",
      img: tableCloth,
    },
    {
      id: 3,
      name: "Akashi Wears",
      img: cap,
    },
    {
      id: 4,
      name: "Mira's Clothes",
      img: hoodie,
    },
    {
      id: 5,
      name: "Day Vibes",
      img: tableCloth,
    },
    {
      id: 6,
      name: "Akashi Wears",
      img: cap,
    },
    {
      id: 7,
      name: "Mira's Clothes",
      img: hoodie,
    },
    {
      id: 8,
      name: "Day Vibes",
      img: tableCloth,
    },
    {
      id: 9,
      name: "Akashi Wears",
      img: cap,
    },
    {
      id: 10,
      name: "Mira's Clothes",
      img: hoodie,
    },
    {
      id: 11,
      name: "Day Vibes",
      img: tableCloth,
    },
    {
      id: 12,
      name: "Akashi Wears",
      img: cap,
    },
  ];
  return (
    <>
      <section className="bg-blue-400 text-white py-10 text-center">
        <h1 className="text-3xl font-[200]">Our Best Sellers</h1>
      </section>
      <ul className="grid align-center grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {sellers.map((seller) => (
          <li
            key={seller.id}
            className="my-5 flex align-center justify-center flex-col"
          >
            <img
              src={seller.img}
              className="bg-red-500 rounded-full w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem]"
              alt="store_image"
            />

            <Link
              to=""
              className="mt-3 flex align-center space-x-1 hover:underline group"
            >
              <small className="text-black">{seller.name}</small>
              <BiArrowToRight className="group-hover:ml-3 transition-all duration-300" />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default BestSellers;
