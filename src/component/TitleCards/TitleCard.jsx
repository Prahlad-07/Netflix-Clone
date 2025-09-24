import React, { useEffect, useRef, useState } from 'react';
import './TitleCard.css';
import { Link } from 'react-router-dom';

const TitleCard = ({ title, category }) => {
  const cardsRef = useRef();
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Nzk1NjBiNmMzYzdkNzcyYzk4NjUxNWYyYWQ2YWEzMSIsIm5iZiI6MTc1ODcwNjQ2NC45Njk5OTk4LCJzdWIiOiI2OGQzYmIyMDVjNzkxY2Q2NzYyZWM0MDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mhPROHiVPIZIHTrUYuFOVjwU0vcHAL4xbrmDrxNeeGQ',
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        setApiData(res.results || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching movies:', err);
        setLoading(false);
      });
  }, [category]); 

  if (loading) {
    return (
      <div className="title-cards">
        <h2>{title || 'Popular on Netflix'}</h2>
        <div className="loading">Loading movies...</div>
      </div>
    );
  }

  return (
    <div className="title-cards">
      <h2>{title || 'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef} onWheel={handleWheel}>
        {apiData.length > 0 ? (
          apiData.map((card, index) =>
            card.backdrop_path ? (
              <Link to={`/player/${card.id}`} className="card" key={card.id || index}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                  alt={card.original_title || card.title}
                  loading="lazy"
                />
                <p>{card.original_title || card.title}</p>
              </Link>
            ) : null
          )
        ) : (
          <div className="no-movies">No movies found</div>
        )}
      </div>
    </div>
  );
};

export default TitleCard;