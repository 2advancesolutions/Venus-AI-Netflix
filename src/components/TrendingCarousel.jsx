import React from 'react';

const TrendingCarousel = ({ items }) => {
  if (!items?.length) {
    return null;
  }

  return (
    <section className="trending row" aria-labelledby="trending-heading">
      <div className="trending__header">
        <h2 id="trending-heading" className="trending__title">
          Trending Now
        </h2>
        <p className="trending__subtitle">
          Queue the cosmic crowd-pleasers. These features are racking up replays across the galaxy.
        </p>
      </div>

      <div className="trending__carousel" role="list" aria-label="Trending trailers">
        {items.map((item) => (
          <a
            key={item.id}
            className="trending-card"
            role="listitem"
            href={item.youtubeUrl}
            style={{
              '--trending-card-gradient': item.gradient,
              '--trending-card-image': `url(${item.artwork})`
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="trending-card__media" aria-hidden="true">
              <span className="trending-card__badge">{item.meta}</span>
              <span className="trending-card__play-icon">▶</span>
            </span>
            <span className="trending-card__footer">
              <span className="trending-card__title">{item.title}</span>
              <span className="trending-card__meta">{item.duration}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default TrendingCarousel;
