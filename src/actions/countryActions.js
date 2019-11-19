export const SET_COUNTRY = "SET_COUNTRY";

export const setCountry = country => ({
  type: SET_COUNTRY,
  payload: {
    country
  }
});
