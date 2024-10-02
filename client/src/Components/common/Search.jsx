import Input from "./Input";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="lg:w-[70%] mx-auto flex align-center space-x-3 mt-2">
      <Input placeholder="search all projects ..." />
      <BiSearch
        size={30}
        className="cursor-pointer text-gray-500 hover:text-black"
      />
    </div>
  );
};
export default Search;
