import { useState } from "react";
import Input from "../common/Input";

const AboutUs = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerMessage, setCustomerMesage] = useState("");

  return (
    <>
      <div id="aboutus" className="my-10">
        {" "}
      </div>
      <div className="mt-20">
        <div className="bg-yellow-200 p-10">
          <h1 className="text-center text-3xl font-[200]">What is DeStore ?</h1>
          <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 align-start">
            <div>
              <h3 className="font-semibold mb-3">About the Marketplace</h3>
              <p>
                Welcome to DeStore, the online hub designed to help small
                businesses showcase their products and reach customers. Whether
                you're a local artisan, a home-based entrepreneur, or a growing
                brand, our platform provides a simple and effective way to open
                your own digital store.
              </p>
              <p className="my-4">
                By giving sellers a dedicated space to present their products,
                we make it easier for customers to discover unique items while
                supporting small businesses.
              </p>
              <p>
                Our marketplace is tailored to be user-friendly, offering all
                the tools sellers need to succeed, and ensuring that buyers
                enjoy a smooth and secure shopping experience.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">For Sellers</h3>
              <p>
                Selling on DeStore is designed to be as simple as possible. Once
                you register, you'll have access to a personalized store page
                where you can list products, set prices, and manage orders
                effortlessly.
              </p>
              <p className="mt-3">
                With our platform, you won't need to worry about building a
                website from scratch or dealing with technical headaches. We
                have done that for you.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">For Buyers</h3>
              <p>
                At DeStore shopping is more than just a transaction. We give you
                access to one-of-a-kind products from independent sellers who
                bring creativity and passion to every item they offer.
              </p>
              <p className="mt-3">
                Browse through a variety of categories, from fashion to home
                decor, and find something special that you won't see anywhere
                else.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="bg-blue-300 p-10">
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full md:w-1/2"
          >
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
        </div> */}
      </div>
    </>
  );
};
export default AboutUs;
