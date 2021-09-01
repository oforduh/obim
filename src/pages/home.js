import NavBar from "../components/navbar";
import Gallery from "../components/gallery";

import styles from "../styles/pages/home.module.scss";

function Home() {
  return (
    <div className={styles.home}>
      <NavBar />
      <Gallery />
    </div>
  );
}

export default Home;
