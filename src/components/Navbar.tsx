import logo from "../svg/Logo.svg";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

function Navbar() {
  const items = [
    { name: "Home", Link: "/", id: 1 },
    { name: "Templates", Link: "/templates", id: 1 },
    { name: "About", Link: "/about", id: 1 },
  ];

  return (
    <div className="p-4 flex w-full justify-between items-center z-50">
      <div className="flex">
        <div className="flex items-center">
          <div className="flex items-center">
            <img src={logo} alt="" className="w-6" />
            <p className="ml-2 font-medium text-xl text-slate-700">Resume</p>
          </div>
          <div className="border-l-2 h-6 ml-6"></div>
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
      <div className="flex items-center">
        <button className="w-24 h-9 bg-transparent border-2 text-blue-500 border-blue-500 font-medium rounded-lg">
          Create
        </button>
        <BsGithub className="text-2xl ml-3" />
      </div>
    </div>
  );
}

export default Navbar;
