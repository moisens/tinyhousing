import "./nav.scss";
import { linkNav, dropdownLinks } from "../../utils/utils";
import Profile from "../../assets/profil.svg";
import Like from "../../assets/like.svg";
import LinkList from "./LinkList";
import DropdowList from "./DropdowList";
import { NavLink, Link } from "react-router-dom";
import { RiArrowDownSFill } from "react-icons/ri";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai"
import { useState } from "react";

const Nav = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [toggleBurger, setToggleBurger] = useState(false);

  const handleDropDown = () => {
    setIsDropdown(!isDropdown);
  };

  const handleTogglrBurger = () => {
    setToggleBurger(!toggleBurger);
  };

  return (
    <nav className="nav__container sticky__nav">
      <div className="logo">tinyhousing</div>
      <div className="navlink__content">
        <ul className="nav__ul">
          <li className="nav__li">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "nav__a activeLink" : "nav__a"
              }
            >
              Home
            </NavLink>
            <RiArrowDownSFill
              className="nav__arrowdown"
              color="#08A1BA"
              onClick={handleDropDown}
            />
          </li>
          <LinkList linksData={linkNav} />
          {/*dropdown links*/}
          <ul
            className={`${
              isDropdown ? "nav__dropdown isVisible" : "nav__dropdown"
            }`}
          >
            <DropdowList
              linksData={dropdownLinks}
              setIsDropdown={setIsDropdown}
            />
          </ul>
          {/*End dropdown links*/}
        </ul>
      </div>
      <div className="menu__like__connect">
        <div className="nav__like">
          <BsHeart size="2rem" />
        </div>
        <div className="nav__connect">
          <AiOutlineUser size="2rem" color="#181b52" />
        </div>
        {/*Toggle menu*/}
        <div className="nav__menu" onClick={handleTogglrBurger}>
          {toggleBurger ? (
            <CgClose size="2rem" className="menu__burger" />
          ) : (
            <HiOutlineMenuAlt2 size="2rem" className="menu__burger" />
          )}
        </div>
        {/*End Toggle menu*/}
      </div>
    </nav>
  );
};

export default Nav;
