import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import VideoPlayer from '../components/VideoPlayer';
import SessionInfo from '../components/SessionInfo';
import SessionReflection from '../components/SessionReflection';
function SessionsDetails() {
  const { sessionId } = useParams();
  const [sessionDetails, setSessionDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5003/sessions/${sessionId}`)
      .then((response) => setSessionDetails(response.data))
      .catch((error) => console.log(error));
  }, [sessionId]);
  if (!sessionDetails) return <p>Loading...</p>;
  return (
    <div>
      <VideoPlayer url={sessionDetails.videoUrl} />
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
