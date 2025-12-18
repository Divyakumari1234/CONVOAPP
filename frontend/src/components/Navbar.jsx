import React from "react";

function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-50 bg-white shadow-lg fixed">
      <div className="max-w-screen-2xl mx-auto px-6 py-3 md:px-40 h-16 flex justify-between items-center">
        <h1 className="text-2xl cursor-pointer font-bold">
          Word<span className="text-3xl text-green-500">To</span>PDF
        </h1>

        <h1 className="text-2xl cursor-pointer font-bold hover:scale-125 duration-300">
          Home
        </h1>
      </div>
    </div>
  );
}

export default Navbar;