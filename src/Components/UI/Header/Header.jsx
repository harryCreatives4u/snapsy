import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import HamburgerMenu from "react-hamburger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCommentAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "../../../Assets/Img/logo.png";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 z-50 w-full py-2 bg-white shadow-md h-14 ">
        <div className="flex items-center justify-around h-full max-h-full mx-auto sm:flex-row xl:justify-between max-w-workspace ">
          <img src={Logo} alt="Logo" className="max-h-8 md:max-h-full " />
          <div className=" md:hidden">
            <HamburgerMenu
              isOpen={menuOpened}
              menuClicked={() => setMenuOpened(!menuOpened)}
              width={20}
              height={18}
              strokeWidth={1}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.5}
            />
          </div>
          <div
            className={`fixed z-50 left-0 flex ${
              menuOpened ? "top-12" : "-top-full"
            } flex-col items-center justify-around w-full my-auto text-base align-middle transition-all bg-white md:justify-between md:text-xl md:static md:flex-row h-60 md:h-full md:bg-none top-full md:w-1/5`}
          >
            <NavLink className="flex flex-row items-center md:flex-row" to="/">
              <FontAwesomeIcon
                icon={faHome}
                className="mr-4 cursor-pointer md:mr-0"
              />
              <p className="md:hidden">Home</p>
            </NavLink>
            <NavLink
              className="flex flex-row items-center md:flex-row"
              to="/chats"
            >
              <FontAwesomeIcon
                icon={faCommentAlt}
                className="mr-4 cursor-pointer md:mr-0"
              />
              <p className="md:hidden">Chats</p>
            </NavLink>
            <NavLink
              className="flex flex-row items-center md:flex-row"
              to="/profile"
            >
              <FontAwesomeIcon
                icon={faUser}
                className="mr-4 cursor-pointer md:mr-0"
              />
              <p className="md:hidden">Profile</p>
            </NavLink>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 z-30 w-full h-screen bg-black ${
          menuOpened ? "opacity-50" : " opacity-0 hidden"
        } md:hidden`}
      ></div>
    </div>
  );
};

export default Header;
