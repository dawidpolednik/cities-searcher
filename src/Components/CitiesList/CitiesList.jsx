import React, { Component } from "react";
import styles from "./CitiesList.module.scss";
import CityItem from "../CityItem/CityItem";

class CitiesList extends Component {
  render() {
    const { citiesList, country } = this.props;
    return (
      <>
        <h2>{`List of the 10 most polluted cities in ${country}`}</h2>
        <ul className={styles.CitiesList}>
          {citiesList.map((city, index) => (
            <CityItem name={city} key={index} />
          ))}
        </ul>
      </>
    );
  }
}
export default CitiesList;
