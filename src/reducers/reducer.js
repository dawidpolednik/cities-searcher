import { SET_COUNTRY, SET_CITIES_LIST } from "../actions/countryActions";

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

    default:
      return state;
  }
};

export default reducer;
