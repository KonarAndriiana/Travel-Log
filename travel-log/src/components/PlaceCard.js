import React from 'react';
import { Link } from 'react-router-dom';

function PlaceCard({ place }) {
  const toggleFavorite = () => {
    const storedPlaces = JSON.parse(localStorage.getItem('travelPlaces')) || [];
    const updatedPlaces = storedPlaces.map(p =>
      p.id === place.id ? { ...p, favorite: !p.favorite } : p
    );
    localStorage.setItem('travelPlaces', JSON.stringify(updatedPlaces));
    window.location.reload(); // jednoduchý refresh, aby sa prepli ikony
  };

  return (
    <div className="place-card">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>{place.city}, {place.country}</h3>
        <button onClick={toggleFavorite} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem' }}>
          {place.favorite ? '⭐' : '☆'}
        </button>
      </div>
      <p>Visited: {place.date}</p>
      <Link to={`/place/${place.id}`}><button>View Details</button></Link>
    </div>
  );
}

export default PlaceCard;
