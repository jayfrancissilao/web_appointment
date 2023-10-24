import React from "react";
import "/src/components/Home/Home.css"; //import css here
import homeImg from "/src/components/Home/homeImg.png"; //import image here

const Home = () => {
  return (
    <div className="home px-8">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-20 gap-5">
        {/* left picture here */}
        <div className="md:w-1/2 w-full">
          <img src={homeImg} alt="" className="w-full" />
        </div>
        {/* right text here */}
        <div className="md:w-1/2 w-full">
          <p className="font-bold ml-1 text-2xl">Welcome to Medico Healthcare</p>
          <h3 className="mt-5 font-bold lg:text-7xl ">
            Your Journey To <br /> better Health <br /> Starts Here
          </h3>
          <button className="fillBtn mt-10 font-bold">Discover More</button>
        </div>
       
      </div>
    </div>
  );
};

export default Home;
