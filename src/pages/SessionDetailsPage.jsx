import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VideoPlayer from '../components/VideoPlayer';
import SessionInfo from '../components/SessionInfo';
import SessionReflection from '../components/SessionReflection';
import '../pages/SessionDetailsPage.css';

function SessionsDetails() {
  const { sessionId } = useParams();
  const [sessionDetails, setSessionDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5003/sessions/${sessionId}`)
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
    </div>
  );
}
export default SessionsDetails;
