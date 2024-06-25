import React, { useEffect, useRef } from 'react';

const Map = ({ hospitals }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const google = window.google;
    const map = new google.maps.Map(mapRef.current, {
      center: { lat: 37.7749, lng: -122.4194 }, // Default center
      zoom: 12,
    });

    hospitals.forEach(hospital => {
      new google.maps.Marker({
        position: {
          lat: hospital.latitude,
          lng: hospital.longitude,
        },
        map,
        title: hospital.name,
      });
    });
  }, [hospitals]);

  return <div ref={mapRef} style={{ height: '100vh', width: '100%' }} />;
};

export default Map;
