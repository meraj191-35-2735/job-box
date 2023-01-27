import React from "react";
import company1 from "../../assests/images/companyIcon/company1.png";
import company2 from "../../assests/images/companyIcon/company2.png";
import company3 from "../../assests/images/companyIcon/company3.png";

const Trending = () => {
  return (
    <div className="mx-12 mt-4 flex h-32 border">
      <div className="w-2/12 flex justify-center items-center bg-accent">
        <h3 className="font-semibold uppercase font-serif text-white">
          Trending Jobs
        </h3>
      </div>
      <div className="w-10/12 flex items-center">
        <div
          data-aos="fade-down"
          className="w-1/3 flex justify-center border-r"
        >
          <div className="flex justify-center items-center">
            <img className="px-2 w-20 h-20" src={company1} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold font-serif">Frontend Developer</h1>
            <h4 className="font-serif text-green-600">
              WebBridge Private Ltd.
            </h4>
          </div>
        </div>
        <div
          data-aos="fade-down"
          className="w-1/3 flex justify-center border-r"
        >
          <div className="flex justify-center items-center">
            <img className="px-2 w-20 h-20" src={company2} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold font-serif">Frontend Developer</h1>
            <h4 className="font-serif text-green-600">
              W3Counter Private Ltd.
            </h4>
          </div>
        </div>
        <div data-aos="fade-down" className="w-1/3 flex justify-center">
          <div className="flex justify-center items-center">
            <img className="px-2 w-20 h-20" src={company3} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold font-serif">Frontend Developer</h1>
            <h4 className="font-serif text-green-600">
              WebStation Private Ltd.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
