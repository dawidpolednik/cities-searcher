import React, { Component } from "react";
import styles from "./CountrySearcher.module.scss";
import { connect } from "react-redux";
import { setCountry, fetchCitiesNames } from "../../actions/countryActions";

class CountrySearcher extends Component {
  state = {
    value: ""
  };

  componentDidUpdate() {
    console.log("this.props.citiesList :", this.props.citiesList);
  }

  convertToTwoLetters = value => {
    const { countriesList } = this.props;

    let newName;
    if (value === countriesList[0].toLowerCase()) {
      newName = "PL";
    } else if (value === countriesList[1].toLowerCase()) {
      newName = "DE";
    } else if (value === countriesList[2].toLowerCase()) {
      newName = "ES";
    } else if (value === countriesList[3].toLowerCase()) {
      newName = "FR";
    }
    return newName;
  };

  isCountryIncludes = value => {
    const { countriesList } = this.props;
    return countriesList.filter(country =>
      country.toLowerCase().startsWith(value)
    );
  };

  searchCountry = () => {
    const { value } = this.state;
    if (this.isCountryIncludes(value)) {
      const { fetchCitiesNames } = this.props;
      const newList = this.isCountryIncludes(value);
      const name = this.convertToTwoLetters(newList[0].toLowerCase());

      fetchCitiesNames(name);
    } else alert("wpisz poprawne panstwo");
  };

  handleChangeInput = e => {
    this.setState(
      {
        ...this.state,
        value: e.target.value.toLowerCase()
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
  citiesList: state.citiesList,
  country: state.country,
  countriesList: state.countriesList
});
export default connect(mapStateToProps, mapDispatchToProps)(CountrySearcher);
