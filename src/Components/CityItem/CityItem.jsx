import React from "react";
import styles from "./CityItem.module.scss";

const CityItem = ({ name }) => (
  <li>
    <div className={styles.CityItemContainer}>
      <p>{name}</p>
      <button>Display city information</button>
    </div>
  </li>
);

export default CityItem;
