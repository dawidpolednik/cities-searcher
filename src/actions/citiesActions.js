export const SET_CITY_PROPERTIES = "SET_CITY_PROPERTIES";

const getCityTitle = data => Object.values(data)[0].title;

const getCityDescription = data => Object.values(data)[0].extract;

export const fetchCityFromApi = cityName => {
  return dispatch => {
    return fetch(
      `https://en.wikipedia.org/w/api.php?action=query&prop=extracts|pageimages&exintro&explaintext&titles=${cityName}&format=json&origin=*`,
      {
        method: "GET"
      }
    )
      .then(r => r.json())
      .then(resp => {
        const data = resp.query.pages;
        const title = getCityTitle(data);
        const description = getCityDescription(data);
        dispatch(setCityProperties([title, description]));
      });
  };
};

export const setCityProperties = response => ({
  type: SET_CITY_PROPERTIES,
  payload: {
    response
  }
});
