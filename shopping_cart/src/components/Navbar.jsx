import cartImg from "../assets/images/cart.svg";
import searchImg from "../assets/images/search.svg";
import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

// Connect navbar links to website pages
const Navbar = ({ cartCount, handleCartClick }) => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <header className={`${styles.header} ${sticky ? styles.sticky : ""}`}>
      <div className={styles.navLogo}>Sonic Aura</div>
      <nav className={styles.navbar}>
        <Link className={styles.linkNav} to="/">
          Home
        </Link>
        <a className={styles.linkNav} href="">
          Shop
        </a>
        <a className={styles.linkNav} href="">
          About
        </a>
        <a className={styles.linkNav} href="">
          Blog
        </a>
        <a className={styles.linkNav} href="">
          Contact Us
        </a>
      </nav>
      <div className={styles.rightHeaderMenu}>
        <div className="login">login</div>
        <img src={searchImg} alt="Search icon" />
        <div className={styles.cartContainer} onClick={() => handleCartClick()}>
          <img src={cartImg} alt="Cart icon" />
          {cartCount > 0 && <div className={styles.badge}>{cartCount}</div>}
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  cartCount: PropTypes.number,
  handleCartClick: PropTypes.func,
};

export default Navbar;