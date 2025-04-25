import React from 'react';

const specialtiesList = [
  "General Physician", "Dentist", "Dermatologist", "Paediatrician", "Gynaecologist",
  "ENT", "Diabetologist", "Cardiologist", "Physiotherapist", "Endocrinologist",
  "Orthopaedic", "Ophthalmologist", "Gastroenterologist", "Pulmonologist", "Psychiatrist",
  "Urologist", "Dietitian/Nutritionist", "Psychologist", "Sexologist", "Nephrologist",
  "Neurologist", "Oncologist", "Ayurveda", "Homeopath"
];

const Filters = ({ consultationType, setConsultationType, specialties, setSpecialties, sortOption, setSortOption }) => {
  const handleSpecialtyChange = (spec) => {
    if (specialties.includes(spec)) {
      setSpecialties(specialties.filter(s => s !== spec));
    } else {
      setSpecialties([...specialties, spec]);
    }
  };

  return (
    <div className="filters">
      <h3 data-testid="filter-header-moc">Consultation Mode</h3>
      <label>
        <input
          type="radio"
          name="consultation"
          value="Video Consult"
          checked={consultationType === 'Video Consult'}
          onChange={() => setConsultationType('Video Consult')}
          data-testid="filter-video-consult"
        /> Video Consult
      </label>
      <label>
        <input
          type="radio"
          name="consultation"
          value="In Clinic"
          checked={consultationType === 'In Clinic'}
          onChange={() => setConsultationType('In Clinic')}
          data-testid="filter-in-clinic"
        /> In Clinic
      </label>

      <h3 data-testid="filter-header-speciality">Speciality</h3>
      {specialtiesList.map(spec => (
        <label key={spec}>
          <input
            type="checkbox"
            checked={specialties.includes(spec)}
            onChange={() => handleSpecialtyChange(spec)}
            data-testid={`filter-specialty-${spec.replaceAll('/', '-').replaceAll(' ', '-')}`}
          /> {spec}
        </label>
      ))}

      <h3 data-testid="filter-header-sort">Sort</h3>
      <label>
        <input
          type="radio"
          name="sort"
          value="fees"
          checked={sortOption === 'fees'}
          onChange={() => setSortOption('fees')}
          data-testid="sort-fees"
        /> Fees (Low to High)
      </label>
      <label>
        <input
          type="radio"
          name="sort"
          value="experience"
          checked={sortOption === 'experience'}
          onChange={() => setSortOption('experience')}
          data-testid="sort-experience"
        /> Experience (High to Low)
      </label>
    </div>
  );
};

export default Filters;