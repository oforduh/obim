import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import styles from "../styles/components/navbar.module.scss";

function NavBar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const openMobileNavigation = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const menuLinks = ["Products", "Learn", "Safety", "Support"];

  return (
    <nav className={styles.navbar}>
      <MobileNavBar
        opened={mobileNavOpen}
        links={menuLinks}
        setopen={openMobileNavigation}
      />

      <div className={styles.ls_container}>
        <div className={styles.logo_container}>
          <h1>obim</h1>
        </div>

        <div className={styles.menuLinks_container}>
          <ul>
            {menuLinks.map((item, index) => (
              <li key={index}>
                <Link to={`/${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.rs_container}>
        <div className={styles.contact}>
          <Link to="/">CONTACT</Link>
        </div>
        <div className={styles.auth}>
          <Link to="/signin">
            <button>LOG IN</button>
          </Link>
        </div>
      </div>

      <div className={styles.hamburger}>
        <IoIosMenu onClick={openMobileNavigation} />
      </div>
    </nav>
  );
}

const MobileNavBar = ({ opened, links, setopen }) => {
  return (
    <div className={`${styles.mobile_navbar} ${opened && styles.open}`}>
      <div className={styles.top_container}>
        <div className={styles.logo_container}>
          <h1>obim</h1>
        </div>

        <div className={styles.hamburger}>
          <IoClose onClick={setopen} />
        </div>
      </div>

      <div className={styles.bottom_container}>
        <div className={styles.menuLinks_container}>
          <ul>
            {links.map((item) => (
              <li>
                <Link to={`/${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.actions}>
          <div className={styles.contact}>
            <Link to="/">CONTACT</Link>
          </div>
          <div className={styles.auth}>
            <Link to="/signin">
              <button>LOG IN</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
