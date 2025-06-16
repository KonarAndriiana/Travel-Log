import React, { useState, useEffect } from 'react';
import PlaceCard from '../components/PlaceCard';

function Home() {
  const [places, setPlaces] = useState([]);

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
          date: '2023-04-10'
        },
        {
          id: 2,
          city: 'Tokyo',
          country: 'Japan',
          date: '2022-09-15'
        }
      ];
      localStorage.setItem('travelPlaces', JSON.stringify(demoData));
      setPlaces(demoData);
    }
  }, []);

  return (
    <div className="container">
      <h1>Your Travel Places</h1>
      {places.map(place => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>
  );
}

export default Home;
