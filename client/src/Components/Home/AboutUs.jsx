import { useState } from "react";
import Input from "../common/Input";

const AboutUs = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerMessage, setCustomerMesage] = useState("");

  return (
    <div className="mt-14">
      <div className="bg-yellow-200 p-10">
        <h1 className="text-center text-3xl font-[200]">What is DeStore ?</h1>
        <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 align-start">
          <div>
            <h3 className="font-semibold">Hello</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              consectetur quis dolor dignissimos, ratione repudiandae
              necessitatibus, magni accusantium, pariatur a ducimus quisquam
              error provident placeat atque odit cumque voluptates labore?
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Hello</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              consectetur quis dolor dignissimos, ratione repudiandae
              necessitatibus, magni accusantium, pariatur a ducimus quisquam
              error provident placeat atque odit cumque voluptates labore?
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Hello</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              consectetur quis dolor dignissimos, ratione repudiandae
              necessitatibus, magni accusantium.
            </p>
          </div>
        </div>

        <h3 className="font-semibold mt-10 text-center">Accordian</h3>
      </div>
      <div className="bg-blue-300 p-10">
        <h3 className="font-semibold mb-3">Contact Us</h3>
        <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-1/2">
          <div className="mb-2">
            <label htmlFor="name">Your Fullname:</label>
            <Input
              id="name"
              name="name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Your Email:</label>
            <Input
              id="email"
              name="email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="message">Your Message:</label>
            <br />
            <textarea
              name="message"
              id="message"
              value={customerMessage}
              onChange={(e) => setCustomerMesage(e.target.value)}
              className="border-2 border-black outline-none w-full px-3 py-2 bg-transparent text-black rounded-md"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AboutUs;
