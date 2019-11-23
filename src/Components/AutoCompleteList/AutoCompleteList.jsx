import React from "react";
import styles from "./AutoCompleteList.module.scss";

const AutoCompleteList = ({ value, checkCountryContains }) => {
  return checkCountryContains(value).length > 0 ? (
    <div className={styles.autoCompleteContainer}>
      <ul>
        <li>{checkCountryContains(value)}</li>
      </ul>
    </div>
  ) : null;
};

export default AutoCompleteList;
