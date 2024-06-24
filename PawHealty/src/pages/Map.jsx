import React, { useState } from "react";
import MapComponent from "../components/MapComponent.jsx";
import SearchBar from "../components/SearchBar.jsx";
import CategoryButton from "../components/CategoryButton.jsx";
import "../style/Map.css";

const Map = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const handleSearch = (query) => {
    setQuery(query);
    // Implementasi logika pencarian lokasi
    console.log(`Mencari lokasi: ${query}`);
  };

  const handleSelectCategory = (category) => {
    setCategory(category);
    // Implementasi logika pemilihan kategori
    console.log(`Kategori terpilih: ${category}`);
  };

  return (
    <>
      <div className="map-app">
        <div className="map-menu-bar">
          <SearchBar onSearch={handleSearch} />
          <CategoryButton onSelectCategory={handleSelectCategory} />
        </div>
        <MapComponent query={query} category={category} />
      </div>
    </>
  );
};

export default Map;
