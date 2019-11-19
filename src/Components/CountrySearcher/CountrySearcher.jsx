import React, { Component } from "react";
import styles from "./CountrySearcher.module.scss";
import { connect } from "react-redux";
import { setCountry } from "../../actions/countryActions";

class CountrySearcher extends Component {
  state = {
    value: ""
  };

  handleChangeInput = e => {
    this.setState(
      {
        ...this.state,
        value: e.target.value
      },
      this.searchCountry()
    );
  };

  searchCountry = () => {
    const { countriesList } = this.props;
    const newList = countriesList.filter(country =>
      country.includes(this.state.value)
    );
    console.log("newList :", newList);
  };

  render() {
    const { value } = this.state;
    return (
      <div className={styles.container}>
        <label>
          Wprowadź nazwę państwa:
          <input
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
    setCountry: country => dispatch(setCountry(country))
  };
};
const mapStateToProps = state => ({
  country: state.country,
  countriesList: state.countriesList
});
export default connect(mapStateToProps, mapDispatchToProps)(CountrySearcher);
