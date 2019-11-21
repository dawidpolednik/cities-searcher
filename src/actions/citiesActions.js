export const SET_CITY = "SET_CITY";

export const fetchCityFromApi = cityName => {
  return dispatch => {
    return fetch(
      `https://en.wikipedia.org/w/api.php?action=query&prop=images&exintro&explaintext&titles=${cityName}&format=json&origin=*`,
      {
        method: "GET"
      }
    )
      .then(r => r.json())
      .then(r => {
        console.log("r :", r);
        dispatch(setCity(r));
      });
  };
};

export const setCity = response => ({
  type: SET_CITY,
  payload: {
    response
  }
});
