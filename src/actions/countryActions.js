export const SET_COUNTRY = "SET_COUNTRY";

export const sortCities = (...cities) =>
  cities.sort((a, b) => b.value - a.value);

export const fetchCitiesNames = countryName => {
  return dispatch => {
    return fetch(
      `https://api.openaq.org/v1/measurements?country=${countryName}&limit=10&parameter[]=pm25&sort=desc&order_by=value`,
      {
        method: "GET"
      }
    )
      .then(r => r.json())
      .then(({ results }) => results.map(({ city }) => console.log(city)));
  };
};

export const setCountry = country => ({
  type: SET_COUNTRY,
  payload: {
    country
  }
});
