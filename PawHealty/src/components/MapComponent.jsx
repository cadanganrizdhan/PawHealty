import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "../assets/paw.png";

// Posisikan lokasi default ke Batam, Indonesia
const position = [1.0456, 104.0305];

// Icon custom untuk marker
const customIcon = new L.Icon({
  iconUrl: icon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MapComponent = () => {
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>Rumah Sakit Hewan</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
