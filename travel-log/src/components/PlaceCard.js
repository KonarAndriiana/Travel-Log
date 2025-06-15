import React from 'react';
import { Link } from 'react-router-dom';

function PlaceCard({ place }) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h3>{place.city}, {place.country}</h3>
      <p>Visited: {place.date}</p>
      <Link to={`/place/${place.id}`}>View details</Link>
    </div>
  );
}

export default PlaceCard;
