import "./App.css";
import CountryList from "./CountryList/CountryList";
import { Routes, Route } from "react-router-dom";
import CountryDetails from "./CountryDetails/CountryDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CountryList />} />
      <Route path="country/:countryId" element={<CountryDetails />} />
    </Routes>
  );
}

export default App;
