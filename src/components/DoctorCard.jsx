import React from 'react';

const DoctorCard = ({ doctor }) => {
  const {
    name,
    experience,
    fees,
    consultation_type,
    specialties = [] // default to empty array if undefined
  } = doctor;

  return (
    <div className="doctor-card">
      <h3>{name}</h3>
      <p>Experience: {experience} years</p>
      <p>Fees: ₹{fees}</p>
      <p>Consultation Type: {consultation_type}</p>
      <p>Specialties: {specialties.join(', ')}</p>
    </div>
  );
};

export default DoctorCard;