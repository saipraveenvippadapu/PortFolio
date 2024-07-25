import React from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="mt-52">
      <ul className=" gap-9">
        <li className="">
          <FaLongArrowAltDown />
        </li>
        <li className="mt-20 text-black">
          <Link to="https://www.instagram.com/saipraveenvippadapu?igsh=d2dmY3BhcGVxaThu">
            <FaInstagram />
          </Link>
        </li>
        <li className="mt-20 text-black">
          <Link to="https://www.linkedin.com/in/sai-praveen-vippadapu-7224562a1/">
            <FaLinkedin />
          </Link>
        </li>
        <li className="mt-20 text-black">
          <Link to="https://github.com/saipraveenvippadapu" target="new">
            <FaGithub />
          </Link>
        </li>
        <li className="mt-20 text-black">
          <Link to="https://x.com/saipraveen215?s=08 ">
            <FaTwitter />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
