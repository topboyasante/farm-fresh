import React from "react";
import { FaBell, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="h-20 sticky top-0 border-b">
      <div className="w-full h-full flex justify-between items-center px-5">
        <div className="border rounded-full p-2 flex justify-center items-center">
          <FaBell />
        </div>
        <div>
          <h5 className="text-green-600">FarmFresh</h5>
        </div>
        <div className="border rounded-full p-2 flex justify-center items-center">
          <FaUser />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
