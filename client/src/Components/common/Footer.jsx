import Logo from "./logo";

const Footer = () => {
  const categories = [
    "Home Appliances",
    "Men and Women Clothes",
    "Glasses and Necklaces",
    "Kids Wear",
    "Hoodies",
    "Sweatpants",
  ];
  const quick_links = [
    "Shopping Cart",
    "Gifts",
    "Profile",
    "Track Order",
    "Customer Help",
    "About Us",
  ];
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-900 text-white px-[7%] py-[3rem]">
      <div>
        <div className="flex align-center space-x-4">
          {/* <Image src={logo} alt="logo" /> */}
          {/* <h3 className="text-[1.7rem]">DeStore</h3> */}
          <Logo />
        </div>

        <div className="my-[1rem]">
          <small className="text-gray-500">Customer Support</small>
          <p>(609) 555-7867</p>
        </div>

        <div className="mb-[1rem] flex flex-col">
          <small className="text-gray-500">4593, Washington, Ave.</small>
          <small className="text-gray-500">Manchester, Kentucky 65748</small>
        </div>
        <p className="text-[13px]">info@destore.com</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 my-[2rem] md:my-0">
        <div className="sm:mb-0 mb-[2rem]">
          <h4 className="text-[15px] font-[100]">TOP CATEGORY</h4>
          <ul>
            {categories.map((item) => (
              <li
                key={Math.random() * 10}
                className="cursor-pointer group relative my-[5px] w-fit"
              >
                <small className="text-gray-500 hover:text-white group-hover:ml-[2rem] transition-all duration-300">
                  {item}
                </small>
                <span className="absolute top-[50%] left-[-5px] w-[2rem] h-[3px] bg-yellow-500 rounded-sm opacity-[0] group-hover:opacity-[1] transition-all duration-500"></span>
              </li>
            ))}
          </ul>
          <ul>
            <li className="cursor-pointer group relative my-[5px] w-fit">
              <small className="text-gray-500 hover:text-yellow-500 transition-smooth">
                Browse All Products
              </small>
              <span className="absolute top-[50%] right-0 w-[2rem] h-[3px] bg-yellow-500 rounded-sm opacity-[0] group-hover:opacity-[1] transition-smooth-slow group-hover:right-[-2.5rem]"></span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[15px] font-[100]">QUICK LINKS</h4>
          <ul>
            {quick_links.map((item) => (
              <li
                key={Math.random() * 10}
                className="cursor-pointer group relative my-[5px] w-fit"
              >
                <small className="text-gray-500 hover:text-white group-hover:ml-[2rem] transition-all duration-300">
                  {item}
                </small>
                <span className="absolute top-[50%] left-[-5px] w-[2rem] h-[3px] bg-yellow-500 rounded-sm opacity-[0] group-hover:opacity-[1] transition-all duration-500"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 my-[2rem] md:my-0 md:w-auto w-full mt-[2rem] lg:mt-0">
        <h1>hello</h1>
      </div>
    </div>
  );
};

export default Footer;
