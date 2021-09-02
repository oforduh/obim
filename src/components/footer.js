import { useEffect, useState } from "react";

import { Scroll } from "../context/scroll";

import styles from "../styles/components/footer.module.scss";

function Footer() {
  const [scrollNav, setScrollNav] = useState(false);

  const { scrolled } = Scroll();

  useEffect(() => {
    scrolled >= 905 ? setScrollNav(true) : setScrollNav(false);
  }, [scrolled]);

  return (
    <footer className={`${styles.footer} ${scrollNav && styles.scroll}`}>
      <div></div>
      <div></div>
      <div></div>
    </footer>
  );
}

export default Footer;
