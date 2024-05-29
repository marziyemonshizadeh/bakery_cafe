"use client";

import { LatLngExpression } from "leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

type MapProps = {
  position: LatLngExpression;
  center: LatLngExpression;
  children: React.ReactNode;
};
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
        <Marker position={position}>
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
