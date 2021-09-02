import NavBar from "../components/navbar";
import Gallery from "../components/gallery";
import Footer from "../components/footer";

import styles from "../styles/pages/home.module.scss";

function Home() {
  return (
    <div className={styles.home}>
      <NavBar />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;
