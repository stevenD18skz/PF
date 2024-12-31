import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const navItems = [
    { path: "/", label: "Pokedex" },
    { path: "/", label: "ERP" },
    { path: "/", label: "Finance" },
  ];

  return (
    <nav className="flex justify-between bg-gray-800 p-4">
      <div className="text-lg font-bold text-white">MyLogo</div>

      <ul className="flex items-center space-x-4">
        {navItems.map((item) => (
          <li key={item.path}>
            <button
              onClick={() => navigate(item.path)}
              className="text-gray-300 hover:text-white"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="text-lg font-bold text-white">Profile</div>
    </nav>
  );
};

export default NavBar;
