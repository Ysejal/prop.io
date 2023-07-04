import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = () => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    let map: L.Map;

    if (!mapRef.current) {
      map = L.map('map').setView([51.505, -0.09], 10);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(map);

      mapRef.current = map;
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return <div id="map" style={{ height: '400px' }}></div>;
};

export default Map;
