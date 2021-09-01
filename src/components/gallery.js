import React from "react";

import images from "../static/gallery";

import styles from "../styles/components/gallery.module.scss";

function Gallery() {
  console.log(images);
  return (
    <div className={styles.gallery}>
      {Object.keys(images).map((item, index) => (
        <figure
          className={`${styles.gallery_item} ${styles.gallery_item}--${[
            index + 1,
          ]}`}
        >
          <img src={images[item]} alt="gallery" />
        </figure>
      ))}

      <div className={styles.gallery_overlay}>
        <div className={styles.gallery_overlay_item}>
          <p>
            <q>
              One word frees us of all the weight and pain of life: that word is
              love.
            </q>
          </p>

          <button>CREATE ACCOUNT</button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
