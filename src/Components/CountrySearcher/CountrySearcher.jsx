import React, { Component } from "react";
import styles from "./CountrySearcher.module.scss";
import { connect } from "react-redux";
import { setCountry, fetchCitiesNames } from "../../actions/countryActions";
import { fetchCityFromApi } from "../../actions/citiesActions";

class CountrySearcher extends Component {
  state = {
    value: ""
  };

  componentDidMount() {
    const { fetchCityFromApi } = this.props;
    fetchCityFromApi("Kędzierzyn-Koźle");
  }

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

  fetchData = () => {
    const { value } = this.state;
    const { setCountry, fetchCitiesNames, countriesList } = this.props;
    const newList = this.checkCountryContains(value);
    const name = this.convertToTwoLetters(newList[0].toLowerCase());
    for (const country of countriesList) {
      if (country.toLowerCase() === value.toLowerCase()) {
        fetchCitiesNames(name);
        setCountry(country);
      }
    }
  };

  searchCountry = () => {
    const { value } = this.state;
    if (this.checkCountryContains(value).length > 0) {
      this.fetchData();
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

  handleAutoCompleteValue = () => {
    const { value } = this.state;
    this.setState(
      {
        ...this.state,
        value: this.checkCountryContains(value)[0].toLowerCase()
      },
      this.fetchData
    );
  };

  get isRenderAutoComplete() {
    const { value } = this.state;
    return this.checkCountryContains(value)[0].toLowerCase() !== value;
  }

  renderAutoCompleteItem = () => {
    const { value } = this.state;
    return (
      this.isRenderAutoComplete && (
        <li onClick={this.handleAutoCompleteValue}>
          {this.checkCountryContains(value)}
        </li>
      )
    );
  };

  renderAutoCompleteList = () => (
    <div className={styles.autoCompleteContainer}>
      <ul>{this.renderAutoCompleteItem()}</ul>
    </div>
  );

  renderAutoCompleteSection = () => {
    const { value } = this.state;
    return this.checkCountryContains(value).length > 0
      ? this.renderAutoCompleteList()
      : null;
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
        {value && value.length > 0 && this.renderAutoCompleteSection()}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setCountry: country => dispatch(setCountry(country)),
    fetchCitiesNames: countryName => dispatch(fetchCitiesNames(countryName)),
    fetchCityFromApi: cityName => dispatch(fetchCityFromApi(cityName))
  };
};
const mapStateToProps = state => ({
  citiesList: state.citiesList,
  country: state.country,
  countriesList: state.countriesList,
  city: state.city
});
export default connect(mapStateToProps, mapDispatchToProps)(CountrySearcher);
