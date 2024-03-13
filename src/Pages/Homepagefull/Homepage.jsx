import React from "react";
import Banner from "../../Components/Homepage/Banner";
import Navbar from "../../Components/Homepage/Navbar";
import LeftsideBar from "../../Components/Homepage/LeftsideBar";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <LeftsideBar />
        <Banner />
      </div>
    </div>
  );
};

export default Homepage;
