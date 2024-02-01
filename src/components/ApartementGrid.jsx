import React from 'react'
import "./ApartementGrid.scss"
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
