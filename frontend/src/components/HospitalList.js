import React from 'react';

const HospitalList = ({ hospitals }) => {
  return (
    <div className="hospital-list">
      {hospitals.map(hospital => (
        <div key={hospital.id} className="hospital-item">
          <h2>{hospital.name}</h2>
          <p>{hospital.address}</p>
          <p>Wait Time: {hospital.wait_time}</p>
        </div>
      ))}
    </div>
  );
};

export default HospitalList;
