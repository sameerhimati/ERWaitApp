import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LoadScript } from '@react-google-maps/api';
import Map from './components/Map';
import HospitalList from './components/HospitalList';
import './styles.css';

const App = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    axios.get('/api/hospitals')
      .then(response => {
        setHospitals(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the hospitals!', error);
      });
  }, []);

  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <div className="App">
      <h1>Hospital ER Wait Times</h1>
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <Map hospitals={hospitals} />
      </LoadScript>
      <HospitalList hospitals={hospitals} />
    </div>
  );
};

export default App;
