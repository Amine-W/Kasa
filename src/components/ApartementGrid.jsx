import React from 'react'
import "./ApartementGrid.css"
import Apartment from "./Apartement.jsx"

function ApartementGrid() {
  return (
    <div className="grid">
      <Apartment />
      <Apartment />
      <Apartment />
      <Apartment />
    </div>
  );
}

export default ApartementGrid
