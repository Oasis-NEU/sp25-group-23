// src/components/TLineMap.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; 

const TLineMap = () => {
  const [stations, setStations] = useState([]);
  const MBTA_API_KEY = 'd1f93b4819cf424e92ef1b539b4f68e4';

  useEffect(() => {
    // Example endpoint, adjust parameters as needed per MBTA documentation
    const fetchStations = async () => {
      try {
        const response = await axios.get(
          'https://api-v3.mbta.com/stops?filter[route]=Red,Orange,Blue', 
          { headers: { 'x-api-key': MBTA_API_KEY } }
        );
        // Filter or transform data for T-line specifically if necessary.
        // Here, I'm assuming you want to display all stops from the response.
        setStations(response.data.data);
      } catch (error) {
        console.error('Error fetching MBTA data:', error);
      }
    };

    fetchStations();
  }, [MBTA_API_KEY]);

  return (
    <div style={{ height: '100vh' }}>
      <MapContainer id="map" center={[42.3601, -71.0589]} zoom={13} style={{ height: '100vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Map through stations and add markers */}
        {stations.map((station) => {
          // Check if station has valid coordinates
          const lat = parseFloat(station.attributes.latitude);
          const lon = parseFloat(station.attributes.longitude);

          console.log(`Station: ${station.attributes.name}, Lat: ${lat}, Lon: ${lon}`); // Debugging line

          if (!lat || !lon) return null;

          return (
            <Marker key={station.id} position={[lat, lon]}>
              <Popup>
                <strong>{station.attributes.name}</strong>
                <br />
                {station.attributes.description}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default TLineMap;