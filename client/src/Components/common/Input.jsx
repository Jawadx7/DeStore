const Input = ({ value, onChange, placeholder, id, name }) => {
  return (
    <input
      className="border-2 border-black outline-none w-full px-3 py-2 bg-transparent text-black rounded-md"
      type="text"
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
export default Input;
