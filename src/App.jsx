import React from 'react';
import './App.css';

const featuredShow = {
  title: 'Venus Originals: Galaxies Unknown',
  description:
    'A crew of curious AIs explores distant galaxies, solving cosmic mysteries with humor, heart, and superior processing power.',
  cta: 'Watch Now'
};

const trendingNow = [
  'Nebula Nights',
  'Code & Cosmos',
  'Orbit Ops',
  'Starlight Soundtrack',
  'Quantum Cafe',
  'Gravity Games'
];

const App = () => {
  return (
    <div className="app">
      <header className="hero">
        <div className="hero__content">
          <span className="badge">Venus Originals</span>
          <h1 className="hero__title">{featuredShow.title}</h1>
          <p className="hero__description">{featuredShow.description}</p>
          <div className="hero__actions">
            <button className="btn btn--primary">{featuredShow.cta}</button>
            <button className="btn btn--secondary">More Info</button>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="row">
          <h2 className="row__title">Trending Now</h2>
          <div className="row__items">
            {trendingNow.map((title) => (
              <article key={title} className="card">
                <div className="card__poster" aria-hidden="true" />
                <h3 className="card__title">{title}</h3>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
