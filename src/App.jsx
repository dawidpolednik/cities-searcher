import React, { Component } from "react";
import CountrySearcher from "./Components/CountrySearcher/CountrySearcher";
import styles from "./App.module.scss";
import { connect } from "react-redux";
import CitiesList from "./Components/CitiesList/CitiesList";

class App extends Component {
  render() {
    const { citiesList, country } = this.props;
    return (
      <div className={styles.App}>
        <CountrySearcher />
        {country && citiesList && citiesList.length > 0 && (
          <CitiesList citiesList={citiesList} country={country} />
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  citiesList: state.citiesList,
  country: state.country,
  countriesList: state.countriesList
});
export default connect(mapStateToProps)(App);
