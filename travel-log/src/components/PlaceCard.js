import React from 'react';
import { Link } from 'react-router-dom';

function PlaceCard({ place }) {
  const toggleFavorite = () => {
    const storedPlaces = JSON.parse(localStorage.getItem('travelPlaces')) || [];
    const updatedPlaces = storedPlaces.map(p =>
      p.id === place.id ? { ...p, favorite: !p.favorite } : p
    );
    localStorage.setItem('travelPlaces', JSON.stringify(updatedPlaces));
    window.location.reload();
  };

  const deletePlace = () => {
    if (window.confirm('Are you sure you want to delete this place?')) {
      const storedPlaces = JSON.parse(localStorage.getItem('travelPlaces')) || [];
      const updatedPlaces = storedPlaces.filter(p => p.id !== place.id);
      localStorage.setItem('travelPlaces', JSON.stringify(updatedPlaces));
      window.location.reload();
    }
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
      <div>
        <Link to={`/place/${place.id}`}><button>View Details</button></Link>
        <Link to={`/edit/${place.id}`}><button>Edit</button></Link>
        <button onClick={deletePlace} style={{ backgroundColor: 'tomato', color: 'white', marginLeft: '0.5rem' }}>
          Delete
        </button>
      </div>
    </div>
  );
}


export default PlaceCard;
