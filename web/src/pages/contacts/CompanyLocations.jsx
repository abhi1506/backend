

import React, { useState } from "react";
import "./CompanyLocations.css";

const CompanyLocations = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 24.578,
    lng: 80.8321,
    name: "Satna Location",
  });

  const locations = [
    {
      name: "Satna Location",
      lat: 24.578,
      lng: 80.8321,
      address: "373/1, Collectorate Campus, Dhawari, Satna, Madhya Pradesh 485001",
      contact: "+91-6232510101",
    },
    {
      name: "Rewa Location",
      lat: 24.5321,
      lng: 81.2981,
      address: "H88G+CQR, APS University, Itaura, Madhya Pradesh 486003",
      contact: "+91-9131890800",
    },
  ];

  return (
    <div className="locations-map-container">
      <div className="locations-sidebar">
        <h1>Locations</h1>
        <p>Explore our service offerings across strategic geographies</p>

        <div className="location-list">
          {locations.map((location) => (
            <div
              key={location.name}
              className={`location-item ${
                selectedLocation.name === location.name ? "active" : ""
              }`}
              onClick={() => setSelectedLocation(location)}
            >
              <h3>{location.name}</h3>
              <p>{location.address}</p>
              <span>{location.contact}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="map-container">
        <iframe
          src={`https://maps.google.com/maps?q=${selectedLocation.lat},${selectedLocation.lng}&z=15&output=embed`}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
          title="Company Location"
        />
      </div>
    </div>
  );
};

export default CompanyLocations;
