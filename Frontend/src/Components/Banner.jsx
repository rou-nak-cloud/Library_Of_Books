import React from "react";
import bannerShelf from "../../public/books-5093228_1280.png";
import banner from "../../public/bookcases-1869616_1280.jpg"

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto md:px-20 px-6 flex md:gap-10 gap-1 flex-col md:flex-row">
        <div className="w-full order-2 md:order-1 md:w-1/2">
          <div className="md:space-y-10 space-y-6">
            <h1 className="md:text-4xl md:text-left text-center text-3xl font-bold md:mt-40 mt-12">
              Hello Everyone! <br />
              Welcome to Book Heaven{" "}
              <span className="text-pink-700">
                Learn Something New Everyday.
              </span>
            </h1>
            <p className="text-md ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos dolorem fugit quos voluptatum aspernatur dolor,
              pariatur ullam tempora ratione repellat magnam iste consequatur
              temporibus ad magni natus provident itaque? Magnam.
            </p>
            <div>
              <label className="input validator">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input className="dark:text-white" type="email" placeholder="mail@site.com" required />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
              <button className="btn btn-soft btn-accent md:ml-3 md:mt-0 mt-2">
                Accent
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <div>
            <img src={banner} className="order-1 rounded-3xl md:mt-29 " alt="" />
          </div>
        </div>
      </div>
      <div className="md:secondImage ">
            <img src={bannerShelf} className="md:w-110 w-60 md:mt-6 mt-10 md:mr-50 mx-auto" alt="" />
        </div>
    </>
  );
};

export default Banner;
