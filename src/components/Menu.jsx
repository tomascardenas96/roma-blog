import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Menu() {
  return (
    <nav className="h-[2.7rem] bg-[#1b1b1e60] px-48 flex justify-between shadow-2xl relative z-50">
      <div className="flex items-center h-full ">
        <ul className="flex gap-8 text-[.72rem]">
          <li className="font-montserrat">EXPLORAR</li>
          <li>REVIEWS</li>
          <li>SOBRE MI</li>
          <li>BUSCAR</li>
        </ul>
      </div>

      <div className="flex items-center h-full text-[1.35rem] gap-5 ">
        <FaFacebookF />
        <FaLinkedin />
        <RiInstagramFill />
        <FaXTwitter />
        <FaYoutube />
      </div>
    </nav>
  );
}

export default Menu;
