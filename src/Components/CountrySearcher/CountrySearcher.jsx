import React, { Component } from "react";
import styles from "./CountrySearcher.module.scss";
import { connect } from "react-redux";
import { setCountry, fetchCitiesNames } from "../../actions/countryActions";

class CountrySearcher extends Component {
  state = {
    value: ""
  };

  searchCountry = () => {
    const { value } = this.state;
    const { countriesList, fetchCitiesNames } = this.props;
    const newList = countriesList.filter(country => country.includes(value));
    console.log("newList :", newList);
    fetchCitiesNames("ES");
  };

  handleChangeInput = e => {
    this.setState(
      {
        ...this.state,
        value: e.target.value
      },
      this.searchCountry
    );
  };

  render() {
    const { value } = this.state;
    return (
      <div className={styles.container}>
        <label>
          Please write some country:
          <input
            placeholder="Search..."
            type="text"
            value={value}
            onChange={this.handleChangeInput}
          ></input>
        </label>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setCountry: country => dispatch(setCountry(country)),
    fetchCitiesNames: countryName => dispatch(fetchCitiesNames(countryName))
  };
};
const mapStateToProps = state => ({
  country: state.country,
  countriesList: state.countriesList
});
export default connect(mapStateToProps, mapDispatchToProps)(CountrySearcher);
