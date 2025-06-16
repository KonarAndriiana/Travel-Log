import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PlaceForm() {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPlace = {
      id: Date.now(), 
      city,
      country,
      date
    };

    const storedPlaces = JSON.parse(localStorage.getItem('travelPlaces')) || [];
    storedPlaces.push(newPlace);
    localStorage.setItem('travelPlaces', JSON.stringify(storedPlaces));

    navigate('/');
  };

  return (
    <div>
      <h2>Add a New Place</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>City:</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
        </div>
        <div>
          <label>Country:</label>
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required />
        </div>
        <div>
          <label>Date of Visit:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <button type="submit">Add Place</button>
      </form>
    </div>
  );
}

export default PlaceForm;

