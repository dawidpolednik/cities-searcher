import React, { Component } from "react";
import styles from "./CountrySearcher.module.scss";
import { connect } from "react-redux";
import { setCountry, fetchCitiesNames } from "../../actions/countryActions";
import { fetchCityFromApi } from "../../actions/citiesActions";
import DialogAlert from "../DialogAlert/DialogAlert";
import ScrollAnimation from "react-animate-on-scroll";

class CountrySearcher extends Component {
  state = {
    value: "",
    isOpenAlert: false
  };

  resetInputValue = () =>
    this.setState({
      ...this.state,
      value: ""
    });

  handleAlert = () =>
    this.setState(prevState => ({
      isOpenAlert: !prevState.isOpenAlert
    }));

  renderDialogAlert = () => {
    this.resetInputValue();
    this.handleAlert();
  };

  convertToTwoLetters = value => {
    const { countriesList } = this.props;
    let newName = "";
    const countryAbbr = ["PL", "DE", "ES", "FR"];
    countriesList
      .map(countryName => countryName.toLowerCase())
      .some((countryName, index) =>
        countryName === value ? (newName = countryAbbr[index]) : null
      );

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
    } else this.renderDialogAlert();
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
      <li
        onClick={this.handleAutoCompleteValue}
        className={styles.autoCompleteItem}
      >
        {this.checkCountryContains(value)}
      </li>
    );
  };

  renderAutoCompleteList = () =>
    this.isRenderAutoComplete && (
      <div className={styles.autoCompleteContainer}>
        <ul className={styles.autoCompleteList}>
          {this.renderAutoCompleteItem()}
        </ul>
      </div>
    );

  renderAutoCompleteSection = () => {
    const { value } = this.state;
    return this.checkCountryContains(value).length > 0
      ? this.renderAutoCompleteList()
      : null;
  };

  renderSearcherTitle = () => (
    <label className={styles.inputTitle} form="name">
      Please write some country:
    </label>
  );

  renderSearcherInput = () => {
    const { value } = this.state;
    return (
      <input
        autoComplete="off"
        className={styles.input}
        placeholder="Search..."
        id="name"
        type="text"
        value={value}
        onChange={this.handleChangeInput}
      />
    );
  };

  render() {
    const { value, isOpenAlert } = this.state;
    const { countriesList } = this.props;

    return (
      <ScrollAnimation
        animateIn="flipInY"
        initiallyVisible={false}
        duration={3}
        delay={100}
        animateOnce
        animatePreScroll
        style={{ textAlign: "center" }}
      >
        <div className={styles.container}>
          {this.renderSearcherTitle()}
          {this.renderSearcherInput()}
          {value && value.length > 0 && this.renderAutoCompleteSection()}
          <DialogAlert
            isOpenAlert={isOpenAlert}
            handleAlert={this.handleAlert}
            countriesList={countriesList}
          />
        </div>
      </ScrollAnimation>
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
  countriesList: state.countriesList
});
export default connect(mapStateToProps, mapDispatchToProps)(CountrySearcher);
