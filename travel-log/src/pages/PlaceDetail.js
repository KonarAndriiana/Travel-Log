import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function PlaceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    const storedPlaces = JSON.parse(localStorage.getItem('travelPlaces')) || [];
    const foundPlace = storedPlaces.find(p => p.id === parseInt(id));
    setPlace(foundPlace);
  }, [id]);

  const handleDelete = () => {
    const storedPlaces = JSON.parse(localStorage.getItem('travelPlaces')) || [];
    const updatedPlaces = storedPlaces.filter(p => p.id !== parseInt(id));
    localStorage.setItem('travelPlaces', JSON.stringify(updatedPlaces));
    navigate('/');
  };

  if (!place) {
    return <p>Place not found.</p>;
  }

  return (
    <div>
      <h2>{place.city}, {place.country}</h2>
      <p>Visited on: {place.date}</p>

      <Link to={`/edit/${place.id}`}><button>Edit</button></Link>
      <button onClick={handleDelete} style={{ marginLeft: '10px' }}>Delete</button>
    </div>
  );
}

export default PlaceDetail;
