export const SET_CITY_PROPERTIES = "SET_CITY_PROPERTIES";

const getCityTitle = data => Object.values(data)[0].title;

const getCityDescription = data => Object.values(data)[0].extract;

const getCityThumbnail = data => Object.values(data)[0].thumbnail.source;

export const fetchCityFromApi = cityName => {
  return dispatch => {
    return fetch(
      `https://en.wikipedia.org/w/api.php?action=query&prop=extracts|pageimages&exintro&explaintext&titles=${cityName}&format=json&origin=*`,
      {
        method: "GET"
      }
    )
      .then(r => r.json())
      .then(r => {
        const data = r.query.pages;
        const title = getCityTitle(data);
        const description = getCityDescription(data);
        const photo = getCityThumbnail(data);
        dispatch(setCityProperties([title, description, photo]));
      });
  };
};

export const setCityProperties = response => ({
  type: SET_CITY_PROPERTIES,
  payload: {
    response
  }
});
