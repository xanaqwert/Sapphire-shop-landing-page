import React from "react";

import styles from "../styles/Global";
import assets from "../assets";

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>
            Tunggu apa lagi Download sekarang
          </h1>
          <p className={`${styles.pText} ${styles.blackText}`}>
            Dapatkan Source aplikasi di github.
          </p>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://github.com/xanaqwert";
          }}
          className={styles.btnPrimary}
        >
          Source Code
        </button>
        <div className={styles.flexCenter}>
          <img
            src={assets.scene}
            alt="download_png"
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
