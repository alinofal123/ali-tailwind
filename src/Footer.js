import Logo from "./components/imgs/tailwind-css-wordmark.svg";
import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900">
      <div className="container mx-auto flex flex-col-reverse space-y-8 text-white px-5 py-10 justify-between md:space-y-0 md:flex-row">
        <div className="flex flex-col items-center justify-between space-y-12 md:space-y-3 md:items-start">
          <div>
            <img src={Logo} alt="logo" className="h-8" />
          </div>
          <div className="text-3xl flex space-x-4">
            <FaFacebookSquare />
            <FaInstagram />
            <FaYoutube />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>

        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-2">
            <button className="hover:text-slate-400">Home</button>
            <button className="hover:text-slate-400">About</button>
            <button className="hover:text-slate-400">Contact</button>
          </div>

          <div className="flex flex-col space-y-2">
            <button className="hover:text-slate-400">Imparint</button>
            <button className="hover:text-slate-400">Privacy</button>
            <button className="hover:text-slate-400">Cridets</button>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <form action="">
            <div className="flex-1 space-x-3">
              <input
                type="text"
                autoComplete="off"
                placeholder="Subscribe To Newsletter"
                className="py-2 px-6 rounded-full text-black outline-none"
                id=""
              />
              <button className="bg-orange-600 mt-4 px-4 py-2 rounded-full hover:bg-slate-600">
                Go
              </button>
            </div>
          </form>
          <div className="hidden md:block">
            Copyright &copy; , 2024 All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
