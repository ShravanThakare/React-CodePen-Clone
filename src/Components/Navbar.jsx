import React from "react";

function Navbar() {
  return (
    <div className="main lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[#2f3640] py-4">
      <div className="left">
        <div className="logo font-bold text-2xl text-white text-center">
          <img
            className=" w-44"
            src="https://tse1.mm.bing.net/th?id=OIP.f9q2H_oLz2BxW-rEnrHY6gHaBV&pid=Api&rs=1&c=1&qlt=95&w=474&h=85"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
