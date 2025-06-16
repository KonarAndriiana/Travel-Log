import React, { useState, useEffect } from 'react';
import PlaceCard from '../components/PlaceCard';

function Home() {
  const [places, setPlaces] = useState([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  useEffect(() => {
    const storedPlaces = localStorage.getItem('travelPlaces');
    if (storedPlaces) {
      setPlaces(JSON.parse(storedPlaces));
    } else {
      const demoData = [
        {
          id: 1,
          city: 'Paris',
          country: 'France',
          date: '2023-04-10',
          favorite: false
        },
        {
          id: 2,
          city: 'Tokyo',
          country: 'Japan',
          date: '2022-09-15',
          favorite: false
        }
      ];
      localStorage.setItem('travelPlaces', JSON.stringify(demoData));
      setPlaces(demoData);
    }
  }, []);

  const filteredPlaces = showFavoritesOnly
    ? places.filter(place => place.favorite)
    : places;

  const toggleFilter = () => {
    setShowFavoritesOnly(prev => !prev);
  };

  return (
    <div className="container">
      <h1>Your Travel Places</h1>
      <button onClick={toggleFilter}>
        {showFavoritesOnly ? 'Zobraziť všetky miesta' : 'Zobraziť len obľúbené'}
      </button>
      <div style={{ marginTop: '1rem' }}>
        {filteredPlaces.length === 0 ? (
          <p>Žiadne miesta na zobrazenie.</p>
        ) : (
          filteredPlaces.map(place => (
            <PlaceCard key={place.id} place={place} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
