import React, { useEffect, useState } from "react";
import headerIcon from "/src/components/Header/headerIcon.png"; // import logo here
import contactIcon from "/src/components/Header/contact.png"; // import Contact Here
import "/src/components/Header/Header.css"; // import css
import { HiMenu } from "react-icons/hi"; //import react icons


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isSticky, setIsSticky] = useState(false);
  
  // toggle menu btn 
  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // navbar sticky
useEffect(() => {
  const handleScroll = () => {
    if(window.scrollY > 100) {
      setIsSticky(true)
    }
  };
  window.addEventListener("scroll", handleScroll);
},[]);

  return (
    <header className="w-full fixed top-0 left-0 right-0">
      <nav className={`py-4 md:px-12 px-4 bg-white ${
          isSticky ? "sticky top-0 left-0 right-0 bg-white" : ""
        }`}>
        {/* for large devices */}
        <div className="flex items-center justify-between">
          {/* for logo */}
          <div>
            <img src={headerIcon} alt="" />
          </div>
          {/* for menu items for large devices */}
          <div className="lg:flex items-center gap hidden text-body text-lg">
            <div>
              <a href="">Home</a>
            </div>
            <div>
              <a href="">About</a>
            </div>
            <div>
              <a href="">Health CheckUp</a>
            </div>
            <div>
              <a href="">Doctors</a>
            </div>
            <div>
              <a href="">Departments</a>
            </div>
          </div>
          {/* btn for large screen only  */}
          <div className="lg:block hidden">
            <button className="font-bold"><img src={contactIcon} alt=""  className=""/></button>
            <button className=" fillBtn text-white">Appointment</button>{/* for rounded button use rounded-full */}
          </div>
          {/* btn for small devices */}
          <button onClick={toogleMenu} className="lg:hidden text-body text-3xl">
              <HiMenu/>
          </button>
        </div>
        {/* menu items for small devices */}
          {
            isMenuOpen && (
              <div className="mt-4 p-4 bg-bgShade rounded-lg text-white">
                <a href="" className=" block py-2">Home</a>
                <a href="" className=" block py-2">About</a>
                <a href="" className=" block py-2">Health CheckUp</a>
                <a href="" className=" block py-2">Doctors</a>
                <a href="" className=" block py-2">Departments</a>
                <button className="block py-2 btn-appointment">Appointment</button>
              </div>
            )
          }
      </nav>
    </header>
  );
};

export default Header;
