import { SET_COUNTRY, SET_CITIES_LIST } from "../actions/countryActions";
import { SET_CITY } from "../actions/citiesActions";

const reducer = (
  state = {
    country: "",
    countriesList: ["Poland", "Germany", "Spain", "France"],
    citiesList: []
  },
  action
) => {
  switch (action.type) {
    case SET_COUNTRY:
      return {
        ...state,
        country: action.payload.country
      };
    case SET_CITIES_LIST:
      return {
        ...state,
        citiesList: action.payload.citiesList
      };

    case SET_CITY:
      return {
        ...state,
        city: action.payload.response
      };

    default:
      return state;
  }
};

export default reducer;
