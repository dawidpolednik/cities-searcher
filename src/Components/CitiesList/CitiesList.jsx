import React, { Component } from "react";
import styles from "./CitiesList.module.scss";
import CityItem from "../CityItem/CityItem";
import ScrollAnimation from "react-animate-on-scroll";

class CitiesList extends Component {
  render() {
    const { citiesList, country } = this.props;
    return (
      <>
        <h2
          className={styles.listTitle}
        >{`List of the 10 most polluted cities in ${country}`}</h2>
        <ScrollAnimation
          animateIn="fadeInRightBig"
          initiallyVisible={false}
          duration={1.5}
          delay={0}
          animateOnce
          animatePreScroll
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 0
          }}
        >
          <ul className={styles.citiesList}>
            {citiesList.map((city, index) => (
              <CityItem name={city} key={index} />
            ))}
          </ul>
        </ScrollAnimation>
      </>
    );
  }
}
export default CitiesList;
