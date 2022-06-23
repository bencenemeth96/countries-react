import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CountryCard from "../CountryCard/CountryCard";

const CountryList = () => {
  const [countryList, setCountryList] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v2/all`)
      .then((response) => setCountryList(response.data));
  }, []);

  const getCountryDetails = (countryId) => {
    navigate(`/country/${countryId}`);
  };

  return countryList.map((country) => (
    <CountryCard
      country={country}
      onClick={() => getCountryDetails(country.alpha3Code)}
    ></CountryCard>
  ));
};

export default CountryList;
