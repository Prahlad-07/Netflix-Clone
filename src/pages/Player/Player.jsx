import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Nzk1NjBiNmMzYzdkNzcyYzk4NjUxNWYyYWQ2YWEzMSIsIm5iZiI6MTc1ODcwNjQ2NC45Njk5OTk4LCJzdWIiOiI2OGQzYmIyMDVjNzkxY2Q2NzYyZWM0MDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mhPROHiVPIZIHTrUYuFOVjwU0vcHAL4xbrmDrxNeeGQ',
    },
  };

  useEffect(() => {
    if (!id) {
      setError(true);
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.results && res.results.length > 0) {
          // Find trailer first, fallback to any video
          const trailer = res.results.find(video => 
            video.type === 'Trailer' && video.site === 'YouTube'
          ) || res.results.find(video => video.site === 'YouTube') || res.results[0];
          
          setApiData(trailer);
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching video data:', err);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  const formatDate = (dateString) => {
    if (!dateString) return 'Date not available';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="player">
        <img 
          src={back_arrow_icon} 
          alt="Back" 
          className="back-btn" 
          onClick={() => navigate(-1)}
        />
        <div className="loading-message">Loading video...</div>
      </div>
    );
  }

  if (error || !apiData.key) {
    return (
      <div className="player">
        <img 
          src={back_arrow_icon} 
          alt="Back" 
          className="back-btn" 
          onClick={() => navigate(-1)}
        />
        <div className="error-message">
          <h2>Video not available</h2>
          <p>Sorry, this video is currently not available to play.</p>
          <button onClick={() => navigate(-1)} className="back-home-btn">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="player">
      <img 
        src={back_arrow_icon} 
        alt="Back" 
        className="back-btn" 
        onClick={() => navigate(-1)}
      />

      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}?autoplay=1&mute=1`}
        title={apiData.name || "Video"}
        frameBorder="0"
        allowFullScreen
        allow="autoplay; encrypted-media"
      ></iframe>

      <div className="player-info">
        <p className="publish-date">{formatDate(apiData.published_at)}</p>
        <p className="video-name">{apiData.name || 'Video Title'}</p>
        <p className="video-type">{apiData.type || 'Video'}</p>
      </div>
    </div>
  );
};

export default Player;