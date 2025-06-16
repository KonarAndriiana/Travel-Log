import React from 'react';

function About() {
  return (
    <div className="container about-page">
      <h1>About Travel Log</h1>
      <p>
        Travel Log je jednoduchá aplikácia, ktorú som vytvorila ako školský projekt na precvičenie práce s Reactom.
        Cieľom bolo vytvoriť si vlastný zoznam navštívených miest – s možnosťou pridať, upraviť, vymazať alebo označiť
        obľúbené destinácie.
      </p>
      <p>
        Aplikácia využíva localStorage na ukladanie dát a obsahuje niekoľko obrazoviek: domovskú stránku, detailné
        zobrazenie miesta, editovanie, a túto stránku o projekte.
      </p>
      <p>
        Bonus: Najnavštevovanejšie mesto na svete je Bangkok 🌍
      </p>
    </div>
  );
}

export default About;
