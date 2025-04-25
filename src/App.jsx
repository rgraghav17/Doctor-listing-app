import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import DoctorCard from './components/DoctorCard';
import './index.css';

const App = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [consultationType, setConsultationType] = useState('');
  const [specialties, setSpecialties] = useState([]);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    fetch('https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json')
      .then(res => res.json())
      .then(data => {
        setDoctors(data);
        applyFilters(data);
      });
  }, []);

  useEffect(() => {
    applyFilters(doctors);
  }, [searchTerm, consultationType, specialties, sortOption]);

  const applyFilters = (doctorsList) => {
    let result = [...doctorsList];

    if (searchTerm) {
      result = result.filter(doc =>
        doc.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (consultationType) {
      result = result.filter(doc => doc.consultation_type === consultationType);
    }

    if (specialties.length > 0) {
      result = result.filter(doc =>
        specialties.some(specialty => doc.specialties.includes(specialty))
      );
    }

    if (sortOption === 'fees') {
      result.sort((a, b) => a.fees - b.fees);
    } else if (sortOption === 'experience') {
      result.sort((a, b) => b.experience - a.experience);
    }

    setFilteredDoctors(result);
  };

  return (
    <div className="app">
      <h1>Doctor Listing Page</h1>
      <SearchBar setSearchTerm={setSearchTerm} doctors={doctors} />
      <Filters
        consultationType={consultationType}
        setConsultationType={setConsultationType}
        specialties={specialties}
        setSpecialties={setSpecialties}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="doctor-list">
        {filteredDoctors.map((doc, index) => (
          <DoctorCard key={index} doctor={doc} />
        ))}
      </div>
    </div>
  );
};

export default App;
