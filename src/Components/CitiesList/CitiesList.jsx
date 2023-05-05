import React, { Component } from "react";
import styles from "./CitiesList.module.scss";
import CityItem from "../CityItem/CityItem";
import ScrollAnimation from "react-animate-on-scroll";

class CitiesList extends Component {
  renderCityList = () => {
    const { citiesList } = this.props;
    return (
      <ul className={styles.citiesList}>
        {citiesList.map((city, index) => (
          <CityItem name={city} key={index} />
        ))}
      </ul>
    );
  };

  renderCityListTitle = () => {
    const { country } = this.props;
    return (
      <h2
        className={styles.listTitle}
      >`List of the 10 most polluted cities in ${country}`</h2>
    );
  };

  render() {
    return (
      <>
        {this.renderCityListTitle()}
        <ScrollAnimation
          animateIn="fadeInRightBig"
          initiallyVisible={false}
          duration={1.5}
          delay={0}
          animateOnce
          animatePreScroll
          className={styles.animation}
        >
          {this.renderCityList()}
        </ScrollAnimation>
      </>
    );
  }
}
export default CitiesList;
