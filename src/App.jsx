import React, { useState } from 'react';
import './App.css';
import TrendingCarousel from './components/TrendingCarousel';
import TrailerCard from './components/TrailerCard';

const featuredShow = {
  title: 'Venus Originals: Galaxies Unknown',
  description:
    'A crew of curious AIs explores distant galaxies, solving cosmic mysteries with humor, heart, and superior processing power.',
  cta: 'Watch Now'
};

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

const trendingGradients = [
  'linear-gradient(135deg, rgba(196, 181, 253, 0.85) 0%, rgba(249, 168, 212, 0.85) 100%)',
  'linear-gradient(135deg, rgba(129, 140, 248, 0.85) 0%, rgba(248, 113, 113, 0.85) 100%)',
  'linear-gradient(135deg, rgba(165, 180, 252, 0.85) 0%, rgba(251, 191, 36, 0.85) 100%)',
  'linear-gradient(135deg, rgba(99, 102, 241, 0.85) 0%, rgba(244, 114, 182, 0.85) 100%)',
  'linear-gradient(135deg, rgba(192, 132, 252, 0.85) 0%, rgba(251, 113, 133, 0.85) 100%)'
];

const trendingArtwork =
  'https://images.unsplash.com/photo-1518281361980-b26bfd556770?auto=format&fit=crop&w=800&q=80';

const trendingSpotlights = trailerLineup.map((trailer, index) => ({
  id: trailer.youtubeId,
  title: trailer.title,
  youtubeUrl: `https://www.youtube.com/watch?v=${trailer.youtubeId}`,
  meta: trailer.genre,
  duration: trailer.duration,
  gradient: trendingGradients[index % trendingGradients.length],
  artwork: trendingArtwork
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
        <TrendingCarousel items={trendingSpotlights} />

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
