import React from "react";
import headerIcon from '/src/components/Header/headerIcon.png' // import logo here
import '/src/components/Header/Header.css' // import css


const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 right-0">
      <nav className="">
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
          {/* btn for large screen */}
          <div className="lg:block hidden">
            <button className="rounded-full fillBtn">Appointment</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
