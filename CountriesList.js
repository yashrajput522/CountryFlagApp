//import countriesData from "../countriesData";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountryListShimmer from "./CountryListShimmer";

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });

      
  }, []);

  if ( countriesData.length===0) {
    return <CountryListShimmer/>
  }

  return (
      <div className="countries-container">
    {countriesData
        .filter((country) => country.name.common.toLowerCase().includes(query)
         ||  country.region.toLowerCase().includes(query))
        .map((country) => {
          return <CountryCard key={country.name.common} items={country} />;
        })} 
          </div>
          
  )
  
}
