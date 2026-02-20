import React from 'react';

const buildEmbedUrl = (youtubeId) =>
  `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`;

const TrailerCard = ({ trailer, isActive, onActivate, onDeactivate }) => {
  const { title, description, thumbnail, youtubeId, genre, duration } = trailer;
  const embedUrl = buildEmbedUrl(youtubeId);

  return (
    <article className={`trailer-card${isActive ? ' trailer-card--active' : ''}`}>
      <div className="trailer-card__media" data-active={isActive}>
        {isActive ? (
          <div className="trailer-card__player" role="group" aria-label={`Trailer playback for ${title}`}>
            <iframe
              src={embedUrl}
              title={`${title} trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <button className="trailer-card__close" type="button" onClick={onDeactivate}>
              Back to cover
            </button>
          </div>
        ) : (
          <button
            className="trailer-card__thumbnail"
            type="button"
            onClick={onActivate}
            aria-label={`Play trailer for ${title}`}
            style={{ backgroundImage: `url(${thumbnail})` }}
          >
            <span className="trailer-card__overlay" aria-hidden="true">
              <span className="trailer-card__play-icon">▶</span>
              <span className="trailer-card__cta">Watch trailer</span>
            </span>
          </button>
        )}
      </div>

      <div className="trailer-card__details">
        <header className="trailer-card__header">
          <h3 className="trailer-card__title">{title}</h3>
          <span className="trailer-card__meta">
            {genre} · {duration}
          </span>
        </header>
        <p className="trailer-card__description">{description}</p>
        {!isActive && (
          <button className="trailer-card__secondary" type="button" onClick={onActivate}>
            Play trailer
          </button>
        )}
      </div>
    </article>
  );
};

export default TrailerCard;
