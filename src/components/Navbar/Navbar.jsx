import React, { useState } from "react";
import "./Navbar.css";
import { logo } from "../../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { RiMenuFold3Fill } from "react-icons/ri";
import { BsFillBackspaceReverseFill } from "react-icons/bs";

const Navbar = ({cart}) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <nav>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <div className="containLinks">
          <ul className="navLink">
            <li>
              <NavLink className="hidLinkSmallScreen" to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="hidLinkSmallScreen" to={"/shop"}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink className="hidLinkSmallScreen" to={"/blog"}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink className="hidLinkSmallScreen" to={"/about"}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="hidLinkSmallScreen" to={"/contact"}>
                Contact
              </NavLink>
            </li>
          </ul>
          <NavLink className="cartIcon" to={"/cart"}>
            <div className="pos">
              <p>{cart}</p>
              <FaShoppingCart />
            </div>
          </NavLink>
          <RiMenuFold3Fill
            onClick={() => setVisible(true)}
            className="menuBar"
          />
        </div>
      </nav>
      {/* sidebar for small screen */}
      <div className={`sideNav ${visible ? "showSideBar" : ""}`}>
        <div className="sideLinks">
          <div onClick={() => setVisible(false)} className="">
            <BsFillBackspaceReverseFill className="closeSidebar" onClick={() => setVisible(false)} />
          </div>
          <NavLink onClick={() => setVisible(false)} to="/" className="">
            HOME
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/shop" className="">
            Shop
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/blog" className="">
            Blog
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/about" className="">
            About
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/contact" className="">
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
