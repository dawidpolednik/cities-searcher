export const SET_COUNTRY = "SET_COUNTRY";

const _ = require("lodash");

const removeDuplicatesObjects = (...cities) => _.uniqBy(cities[0], "city");

const extractFirstTenCitiesNames = (...cities) =>
  _.take(cities[0], 10).map(({ city }) => city);

export const fetchCitiesNames = countryName => {
  return dispatch => {
    return fetch(
      `https://api.openaq.org/v1/measurements?country=${countryName}&limit=500&parameter[]=pm25&sort=desc&order_by=value`,
      {
        method: "GET"
      }
    )
      .then(r => r.json())
      .then(({ results }) => {
        const withoutDuplicatesCities = removeDuplicatesObjects(results);
        const extractedList = extractFirstTenCitiesNames(
          withoutDuplicatesCities
        );
        return extractedList;
      });
  };
};

export const setCountry = country => ({
  type: SET_COUNTRY,
  payload: {
    country
  }
});
