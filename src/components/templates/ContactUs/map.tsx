"use client";

import { LatLngExpression, icon } from "leaflet";
import "leaflet-defaulticon-compatibility";
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

type MapProps = {
  position: LatLngExpression;
  center: LatLngExpression;
  children: React.ReactNode;
};

const ICON = icon({
  iconUrl: "/images/location-icon.png",
  iconSize: [32, 32],
});
function Map({ position, center, children }: MapProps) {
  return (
    <div className="relative">
      <MapContainer
        center={center}
        zoom={14}
        scrollWheelZoom={true}
        className="size-96 z-20"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={ICON}>
          <Popup>cafe bakery</Popup>
        </Marker>
      </MapContainer>
      <div className="absolute bg-[#D1B48C] dark:bg-[#413a2d] dark:text-[#eacfaa] -bottom-6 z-30 mx-12 p-3 text-sm leading-5">
        {children}
      </div>
    </div>
  );
}

export default Map;
