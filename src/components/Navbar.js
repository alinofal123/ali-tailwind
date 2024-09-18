import Logo from "./imgs/tailwind-css-wordmark.svg";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="container mx-auto p-5">
      <div className="flex items-center justify-between">
        <img src={Logo} alt="tailwind logo" width={"200px"} />

        <div className="hidden md:flex space-x-6">
          <button className="text-slate-700 hover:text-yellow-400">
            Portfolio
          </button>
          <button className="text-slate-700 hover:text-yellow-400">
            About
          </button>
          <button className="text-slate-700 hover:text-yellow-400">
            Contact
          </button>
          <button className="text-slate-700 hover:text-yellow-400">
            Social
          </button>
          <button className="text-white rounded-full py-2 px-6 bg-orange-600 hover:bg-slate-600">
            Call Me
          </button>
        </div>
        <button className="text-3xl md:hidden">
          <IoMenuSharp />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
