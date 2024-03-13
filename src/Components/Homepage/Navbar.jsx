import React, { useState } from "react";
import MobileItems from "./MobileItems";

const Navbar = () => {
  const [active, setactive] = useState(false);

  return (
    <div className="bg-blue-500 p-3 relative">
      <nav className="flex items-center justify-between">
        <h1>LOGO</h1>
        <ul className="hidden md:flex md:items-center md:gap-4">
          <li>Home</li>
          <li>Services</li>
          <li>Company</li>
        </ul>
        <div className="md:hidden" onClick={() => setactive(!active)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
        {active && <MobileItems />}
      </nav>
    </div>
  );
};

export default Navbar;
