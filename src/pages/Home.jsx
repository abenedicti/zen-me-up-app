import '../pages/HomePage.css';
import HomeBg from '../assets/home-bg.mp4';
import Lottie from 'lottie-react';
import animation from '../assets/Meditation.json';

function HomePage() {
  return (
    <>
      <div className="header">
        <video autoPlay muted loop playsInline src={HomeBg}></video>
      </div>
      <h1>ZenMeUp</h1>
      <div className="home-content">
        <h2>Guided meditations</h2>
        <p className="word w1">Daily calm</p>
        <p className="word w2">Sleep better</p>
        <p className="word w3">Anxiety</p>
        <p className="word w4">Focus</p>
        <p className="word w5">Live mindfully</p>
        <div className="anim-home">
          <Lottie animationData={animation} loop={true} />
        </div>
      </div>
    </>
  );
}
export default HomePage;
