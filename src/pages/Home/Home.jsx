import React from 'react';
import './Home.css';
import Navbar from '../../component/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCard from '../../component/TitleCards/TitleCard';
import Footer from '../../component/Footer/Footer';

const Home = () => {
  const handlePlayClick = () => {
    console.log('Play button clicked');
  };

  const handleInfoClick = () => {
    console.log('More info button clicked');
  };

  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="Hero Banner" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="Hero Title" className='caption-img'/>
          <p>
            Discovering his ties to a secret ancient order, 
            a young man living in modern Istanbul embarks on a quest
            to save the city from an immortal enemy.
          </p>
          <div className="hero-btn">
            <button className='btn' onClick={handlePlayClick}>
              <img src={play_icon} alt="Play" />
              Play
            </button>
            <button className='btn dark-btn' onClick={handleInfoClick}>
              <img src={info_icon} alt="More Info" />
              More Info
            </button>
          </div>
        </div>
      </div>
      
      <div className="more-cards">
        <TitleCard title={"Blockbuster Movies"} category={"now_playing"} />
        <TitleCard title={"Only on Netflix"} category={"popular"} />
        <TitleCard title={"Upcoming"} category={"upcoming"} />
        <TitleCard title={"Top Picks for You"} category={"top_rated"} />
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;