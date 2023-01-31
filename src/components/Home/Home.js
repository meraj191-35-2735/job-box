import React from "react";
import Banner from "./Banner";
import Footer from "../Footer/Footer";
import Trending from "./Trending";
import TopHirer from "./TopHirer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Trending></Trending>
      <TopHirer></TopHirer>
      <Footer></Footer>
    </div>
  );
};

export default Home;
