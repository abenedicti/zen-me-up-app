import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VideoPlayer from '../components/VideoPlayer';
import SessionInfo from '../components/SessionInfo';
import SessionReflection from '../components/SessionReflection';
import '../pages/SessionDetailsPage.css';
import Lottie from 'lottie-react';
import monkey from '../assets/MeditatingMonkey.json';

function SessionsDetails() {
  const { sessionId } = useParams();
  const [sessionDetails, setSessionDetails] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    axios
      .get(`${API_URL}/sessions/${sessionId}`)
      .then((response) => setSessionDetails(response.data))
      .catch((error) => console.log(error));
  }, [sessionId]);
  if (!sessionDetails) return <p>Loading...</p>;
  return (
    <div className="page-content">
      <VideoPlayer session={sessionDetails} />

      <SessionInfo
        title={sessionDetails.title}
        author={sessionDetails.author}
        duration={sessionDetails.duration}
        description={sessionDetails.description}
      />
      <SessionReflection
        sessionId={sessionDetails.id}
        userReflection={sessionDetails.userReflection}
      />
      <div className="monkey">
        <Lottie animationData={monkey} loop={true} />
      </div>
    </div>
  );
}
export default SessionsDetails;
