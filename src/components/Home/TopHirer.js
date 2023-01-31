import React from "react";
import resumeBg from "../../assests/images/topHirer/resume-bg.jpg";

const TopHirer = () => {
  return (
    <div className="w-full min-h-full grid lg:grid-cols-2 gap-3 grid-cols-1 mt-5 px-10">
      <div>
        <h2 className="font-bold font-serif">Top Trending Jobs</h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${resumeBg})`,
        }}
      >
        <h1 className="font-semibold font-serif">Add Resume</h1>
      </div>
    </div>
  );
};

export default TopHirer;
