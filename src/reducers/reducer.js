import {
  SET_COUNTRY,
  SET_CITIES_LIST,
  SET_SPINNER_FLAG
} from "../actions/countryActions";
import { SET_CITY_PROPERTIES } from "../actions/citiesActions";

const reducer = (
  state = {
    country: "",
    countriesList: ["Poland", "Germany", "Spain", "France"],
    citiesList: [],
    isShouldRenderSpinner: false
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

    case SET_CITY_PROPERTIES:
      return {
        ...state,
        cityProperties: action.payload.response
      };

    case SET_SPINNER_FLAG:
      return {
        ...state,
        isShouldRenderSpinner: action.payload.bool
      };

    default:
      return state;
  }
};

export default reducer;
