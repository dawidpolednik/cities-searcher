export const checkIncorrectNameFromApi = citiesList =>
  citiesList.map(cityName => {
    if (cityName === "Rheinland-Pfalz") cityName = "Rhineland-Palatinate";
    else if (cityName === "Niedersachsen") cityName = "Lower Saxony";
    else if (cityName === "Bayern") cityName = "Munich";
    else if (cityName === "Thüringen") cityName = "Thuringia";
    else if (cityName === "Sachsen-Anhalt") cityName = "Saxony-Anhalt";
    else if (cityName === "Castellón") cityName = "Province of Castellón";
    return cityName;
  });
