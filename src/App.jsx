import React, { useState } from 'react';
import './App.css';
import TrailerCard from './components/TrailerCard';

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

const trailerLineup = [
  {
    youtubeId: '8BydJLJxJPI',
    title: 'Aurora Protocol',
    description:
      'A mind-bending expedition where an AI captain must decode a cosmic signal before it rewrites reality as we know it.',
    genre: 'Sci-Fi Thriller',
    duration: '2m 18s'
  },
  {
    youtubeId: 'wwfEy4qSw7s',
    title: 'Pulse of the Past',
    description:
      'When a forgotten melody unlocks ancestral memories, one prodigy must reconcile history with a turbulent present.',
    genre: 'Drama',
    duration: '1m 55s'
  },
  {
    youtubeId: 'gHpElXQ_roc',
    title: 'Gravity Drift',
    description:
      'Pilot trainees enter a gravity-defying race that rewards courage, quick thinking, and one mischievous copilot bot.',
    genre: 'Action · Adventure',
    duration: '2m 05s'
  },
  {
    youtubeId: 'Z_SV6XWfCo8',
    title: 'Signal in the Static',
    description:
      'A journalist follows a whispered transmission across the solar system, unearthing a conspiracy among the stars.',
    genre: 'Mystery',
    duration: '2m 21s'
  },
  {
    youtubeId: 'UiMg566PREA',
    title: 'Hearts in Orbit',
    description:
      'Two asteroid engineers fake a relationship to save their mission and accidentally fall for the galaxy they built.',
    genre: 'Romance · Comedy',
    duration: '2m 02s'
  }
].map((trailer) => ({
  ...trailer,
  thumbnail: `https://img.youtube.com/vi/${trailer.youtubeId}/hqdefault.jpg`
}));

const App = () => {
  const [activeTrailerId, setActiveTrailerId] = useState(null);

  const handleActivate = (youtubeId) => {
    setActiveTrailerId((current) => (current === youtubeId ? null : youtubeId));
  };

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

        <section className="trailers">
          <div className="trailers__header">
            <h2 className="trailers__title">Spotlight Trailers</h2>
            <p className="trailers__subtitle">
              Click a cover to jump straight into the trailer. I will swap the thumbnail for playback so you can focus on the action.
            </p>
          </div>
          <div className="trailers__grid">
            {trailerLineup.map((trailer) => (
              <TrailerCard
                key={trailer.youtubeId}
                trailer={trailer}
                isActive={activeTrailerId === trailer.youtubeId}
                onActivate={() => handleActivate(trailer.youtubeId)}
                onDeactivate={() => setActiveTrailerId(null)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
