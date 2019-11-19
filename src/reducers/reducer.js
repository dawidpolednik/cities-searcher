import { SET_COUNTRY } from "../actions/countryActions";

const reducer = (
  state = {
    country: "",
    countriesList: ["Poland", "Germany", "Spain", "France"],
    cities: []
  },
  action
) => {
  switch (action.type) {
    case SET_COUNTRY:
      return {
        ...state,
        country: action.payload.country
      };

    default:
      return state;
  }
};

export default reducer;
