import { checkIncorrectNameFromApi } from "./openAqApiFix";
export const SET_COUNTRY = "SET_COUNTRY";
export const SET_CITIES_LIST = "SET_CITIES_LIST";
export const SET_SPINNER_FLAG = "SET_SPINNER_FLAG";

const _ = require("lodash");

const removeDuplicatesObjects = (...cities) => _.uniqBy(cities[0], "city");

const extractFirstTenCitiesNames = (...cities) =>
  _.take(cities[0], 10).map(({ city }) => city);

const checkMultipleNames = cityNameList =>
  cityNameList.map(cityName =>
    cityName.includes("/") ? cityName.split("/")[0] : cityName
  );

export const fetchCitiesNames = countryName => {
  return dispatch => {
    dispatch(setSpinnerFlag(true));
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

        const withoutDuplicatesNames = checkMultipleNames(extractedList);

        const withoutValidNames = checkIncorrectNameFromApi(
          withoutDuplicatesNames
        );

        dispatch(setSpinnerFlag(false));
        dispatch(setCitiesList(withoutValidNames));
      });
  };
};

export const setSpinnerFlag = bool => ({
  type: SET_SPINNER_FLAG,
  payload: {
    bool
  }
});

export const setCitiesList = citiesList => ({
  type: SET_CITIES_LIST,
  payload: {
    citiesList
  }
});

export const setCountry = country => ({
  type: SET_COUNTRY,
  payload: {
    country
  }
});
