import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./navbar.module.css";
import { FiUser, FiShoppingCart } from "react-icons/fi";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={`${classes.container} ${isScrolled && classes.scrolled}`}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to="/" className={classes.title}>
            Foodable
          </Link>
        </div>

        <div className={classes.center}>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <a href="#">Home</a>
            </li>
            <li className={classes.listItem}>
              <a href="#contacts">Contacts</a>
            </li>
            <li className={classes.listItem}>
              <a href="#foods">Foods</a>
            </li>
            <li className={classes.listItem}>
              <a href="#faq">FAQ</a>
            </li>
            <li className={classes.listItem}>
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </div>

        <div className={classes.right}>
          <FiUser className={classes.userIcon} />
          <Link to="/cart" className={classes.cartContainer}>
            <FiShoppingCart className={classes.cartIcon} />
            <div className={classes.cartQuantity}>0</div>
          </Link>

          <button className={classes.logout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
