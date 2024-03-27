import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const MapPreview = ({ address }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize Leaflet map
    const map = L.map(mapRef.current).setView([0, 0], 15);

    // Add Tile layer (you may need to adjust the URL based on your preference)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Geocode the address and set the center of the map
    const geocodeAddress = async () => {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`);
        if (!response.ok) {
          throw new Error('Failed to geocode address');
        }
        const data = await response.json();
        if (data.length > 0) {
          const { lat, lon } = data[0];
          map.setView([lat, lon], 15);
        }
      } catch (error) {
        console.error('Error geocoding address:', error);
      }
    };

    if (address) {
      geocodeAddress();
    }

    return () => {
      map.remove(); // Clean up when component unmounts
    };
  }, [address]);

  return <div ref={mapRef} className="w-[423px] h-[205px] rounded" />;
};

export default MapPreview;
