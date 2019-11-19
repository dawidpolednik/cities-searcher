import React, { Component } from "react";
import CountrySearcher from "./Components/CountrySearcher/CountrySearcher";
import styles from "./App.module.scss";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <CountrySearcher />
      </div>
    );
  }
}

export default App;
