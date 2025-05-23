import { Link } from "react-router-dom";
import React from "react";
export default function CountryCard({ items }) {
  const { name, flags, population = "", region, capital = [], maps, } = items;

  return (
    <Link className="country-card" to={`/${name?.common}`} state={ items }>
      <img src={flags.svg} alt={name?.common + " Flag"} />
      <div className="card-text">
        <h3 className="card-title">{name?.common}</h3>
        <p>
          <b>Population: </b>
          {population.toLocaleString("en-IN")}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital?.[0]}
        </p>
        <p>
          <b>
            {" "}
            <a
              href={maps.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline" }}
            >
              View on Google Maps
            </a>
          </b>
        </p>
      </div>
    </Link>
  );
}
