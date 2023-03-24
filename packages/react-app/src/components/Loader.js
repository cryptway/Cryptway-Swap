import React from "react";

import styles from "../styles";
import { unicorn } from "../assets";

const Loader = ({ title }) => {
  return (
    <div className={styles.loader}>
      <img
        src={unicorn}
         
        className={styles.loaderImg}
      />
      <p className={styles.loaderText}>{title}</p>
    </div>
  );
};

export default Loader;
