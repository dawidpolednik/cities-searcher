import React, { Component } from "react";
import styles from "./CountrySearcher.module.scss";
import { connect } from "react-redux";
import { setCountry, fetchCitiesNames } from "../../actions/countryActions";
import AutoCompleteList from "../AutoCompleteList/AutoCompleteList";

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

  checkCountryContains = value => {
    const { countriesList } = this.props;
    return countriesList.filter(countryName =>
      countryName.toLowerCase().startsWith(value)
    );
  };

  searchCountry = () => {
    const { value } = this.state;
    const { setCountry } = this.props;
    if (this.checkCountryContains(value).length > 0) {
      const { fetchCitiesNames, countriesList } = this.props;
      const newList = this.checkCountryContains(value);
      const name = this.convertToTwoLetters(newList[0].toLowerCase());

      for (const country of countriesList) {
        if (country.toLowerCase() === value.toLowerCase()) {
          fetchCitiesNames(name);
          setCountry(country);
        }
      }
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
    const { countriesList } = this.props;
    console.log("value :", value);
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
        {value && value.length > 0 && (
          <AutoCompleteList
            countriesList={countriesList}
            value={value}
            checkCountryContains={this.checkCountryContains}
          />
        )}
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
