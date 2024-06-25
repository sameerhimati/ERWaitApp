import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '600px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Map = ({ hospitals }) => {
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      {hospitals.map(hospital => (
        <Marker
          key={hospital.id}
          position={{
            lat: parseFloat(hospital.latitude), // assuming latitude field is in the DB
            lng: parseFloat(hospital.longitude) // assuming longitude field is in the DB
          }}
          label={hospital.wait_time}
        />
      ))}
    </GoogleMap>
  );
}

export default Map;
