import React, { Component } from "react";
import styles from "./CityItem.module.scss";
import { connect } from "react-redux";
import { fetchCityFromApi } from "../../actions/citiesActions";
import DialogCityInfo from "../DialogCityInfo/DialogCityInfo";

class CityItem extends Component {
  state = {
    isOpenDialog: false
  };

  handleDialog = () =>
    this.setState(prevState => ({ isOpenDialog: !prevState.isOpenDialog }));

  renderCityData = async () => {
    const { cityProperties, name, fetchCityFromApi } = this.props;
    console.log("name :", name);
    await fetchCityFromApi(name);
    this.handleDialog();
  };

  render() {
    const { name, cityProperties } = this.props;
    return (
      <>
        <li>
          <div className={styles.CityItemContainer}>
            <p>{name}</p>
            <button onClick={this.renderCityData}>
              Display city informations
            </button>
          </div>
        </li>
        <DialogCityInfo
          isOpenDialog={this.state.isOpenDialog}
          handleDialog={this.handleDialog}
          cityProperties={cityProperties}
        />
      </>
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
