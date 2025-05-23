import React from 'react'
import "../App.css";
import SearchBar from "./SearchBar";
import CountriesList from "./CountriesList";
import SelectMenu from "./SelectMenu";
import { useState } from "react";

export default function Home() {
    const [query, setQuery] = useState("");
  return (
    <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu  setQuery={setQuery}/>
        </div>
        <CountriesList query={query} />
      </main>
  )
}
