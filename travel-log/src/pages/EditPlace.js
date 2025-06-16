import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditPlace() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const storedPlaces = JSON.parse(localStorage.getItem('travelPlaces')) || [];
    const place = storedPlaces.find(p => p.id === parseInt(id));
    if (place) {
      setCity(place.city);
      setCountry(place.country);
      setDate(place.date);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedPlaces = JSON.parse(localStorage.getItem('travelPlaces')) || [];
    const updatedPlaces = storedPlaces.map(p =>
      p.id === parseInt(id)
        ? { ...p, city, country, date }
        : p
    );
    localStorage.setItem('travelPlaces', JSON.stringify(updatedPlaces));
    navigate(`/place/${id}`);
  };

  return (
    <div>
      <h2>Edit Place</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>City:</label>
          <input type="text" value={city} onChange={e => setCity(e.target.value)} required />
        </div>
        <div>
          <label>Country:</label>
          <input type="text" value={country} onChange={e => setCountry(e.target.value)} required />
        </div>
        <div>
          <label>Date of Visit:</label>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditPlace;
