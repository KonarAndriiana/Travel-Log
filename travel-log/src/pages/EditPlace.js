import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditPlace() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    const storedPlaces = JSON.parse(localStorage.getItem('travelPlaces')) || [];
    const foundPlace = storedPlaces.find(p => p.id === parseInt(id));
    if (foundPlace) {
      setPlace(foundPlace);
    }
  }, [id]);

  const handleChange = (e) => {
    setPlace({ ...place, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedPlaces = JSON.parse(localStorage.getItem('travelPlaces')) || [];
    const updatedPlaces = storedPlaces.map(p =>
      p.id === place.id ? place : p
    );
    localStorage.setItem('travelPlaces', JSON.stringify(updatedPlaces));
    navigate('/');
  };

  if (!place) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>Edit Place</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="city"
          value={place.city}
          onChange={handleChange}
          placeholder="City"
          required
        />
        <input
          name="country"
          value={place.country}
          onChange={handleChange}
          placeholder="Country"
          required
        />
        <input
          type="date"
          name="date"
          value={place.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditPlace;
