import React, { Component } from "react";
import styles from "./CityItem.module.scss";
import { connect } from "react-redux";
import { fetchCityFromApi } from "../../actions/citiesActions";

class CityItem extends Component {
  // componentDidUpdate() {
  //   const { name } = this.props;
  //   console.log("name :", name);
  //   const { fetchCityFromApi } = this.props;
  //   fetchCityFromApi(name);
  // }

  renderCityData = () => {
    const { cityProperties, name, fetchCityFromApi } = this.props;
    fetchCityFromApi(name);
    return console.log("cityProperties :", cityProperties);
  };

  render() {
    const { name } = this.props;
    return (
      <li>
        <div className={styles.CityItemContainer}>
          <p>{name}</p>
          <button onClick={this.renderCityData}>
            Display city informations
          </button>
        </div>
      </li>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchCityFromApi: cityName => dispatch(fetchCityFromApi(cityName))
  };
};
const mapStateToProps = state => ({
  cityProperties: state.cityProperties
});
export default connect(mapStateToProps, mapDispatchToProps)(CityItem);
