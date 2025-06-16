import React from 'react';
import { Link } from 'react-router-dom';
import './PlaceCard.css';

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
      <div className="place-header">
        <h3>{place.city}, {place.country}</h3>
        <button
          className="favorite-star"
          onClick={toggleFavorite}
          title={place.favorite ? 'Remove from favorites' : 'Mark as favorite'}
        >
          {place.favorite ? '★' : '☆'}
        </button>
      </div>

      <p className="place-date">Visited: {place.date}</p>

      <div className="place-actions">
        <Link to={`/place/${place.id}`}>
          <button className="action-button">View Details</button>
        </Link>
        <Link to={`/edit/${place.id}`}>
          <button className="action-button">Edit</button>
        </Link>
        <button className="delete-button" onClick={deletePlace}>Delete</button>
      </div>
    </div>
  );
}

export default PlaceCard;
