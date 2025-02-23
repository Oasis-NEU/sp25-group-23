// src/components/TLineMap.jsx
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const MBTA_API_KEY = "d1f93b4819cf424e92ef1b539b4f68e4";

const TLineMap = () => {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await axios.get(
          'https://api-v3.mbta.com/stops?filter[route]=Red,Orange,Blue',
          { headers: { 'x-api-key': MBTA_API_KEY } }
        );
        console.log('MBTA API Response:', response.data); // Debugging line
        setStations(response.data.data);
      } catch (error) {
        console.error('Error fetching MBTA data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStations();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <MapContainer
      center={[42.3601, -71.0589]}
      zoom={12}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      {stations.map((station) => {
        const lat = station.attributes.latitude;
        const lon = station.attributes.longitude;

        if (!lat || !lon) return null;

        return (
          <Marker key={station.id} position={[lat, lon]}>
            <Popup>{station.attributes.name}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default TLineMap;