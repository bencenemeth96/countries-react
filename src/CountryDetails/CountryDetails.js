import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const { countryId } = useParams();
  const [countryDetails, setCountryDetails] = useState([]);
  console.log(countryDetails);
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v2/alpha/${countryId}`)
      .then((response) => setCountryDetails(response.data));
  }, [countryId]);
  return (
    <div>
      {countryDetails.name}
      <img src={countryDetails?.flags?.svg} alt="" />
    </div>
  );
};

export default CountryDetails;
