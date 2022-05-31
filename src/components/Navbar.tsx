import logo from "../svg/Logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const items = [
    { name: "Home", Link: "/", id: 1 },
    { name: "Templates", Link: "/templates", id: 1 },
    { name: "About", Link: "/about", id: 1 },
  ];

  return (
    <div className="p-4 flex w-full justify-between items-center z-50">
      <div className="flex items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="" className="w-8" />
          </Link>
          <p className="text-slate-700 font-medium ml-4">CV Maker</p>
        </div>
        <div className="flex">
          {items.map((item) => {
            return (
              <Link to={item.Link}>
                <p className="font-medium text-gray-800 ml-4">{item.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <Link to="/build">
        <button className="w-32 h-10 text-sm text-white bg-indigo-600 font-normal rounded-full hover:bg-indigo-700 duration-100">
          Create Resume
        </button>
      </Link>
    </div>
  );
}

export default Navbar;
