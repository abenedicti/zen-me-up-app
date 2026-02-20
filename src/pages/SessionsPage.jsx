import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../pages/SessionsPage.css';
import { PropagateLoader } from 'react-spinners';

function Sessions() {
  const { programId } = useParams();
  const [sessions, setSessions] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    axios
      .get(`${API_URL}/sessions?programId=${programId}`)
      .then((response) => {
        setSessions(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [programId]);
  return (
    <div className="programs-session-content">
      {loading ? (
        <div className="spinner">
          <PropagateLoader />
        </div>
      ) : (
        <div className="session-content">
          <h2>Program's session</h2>
          <div className="para-content">
            {sessions.map((session) => (
              <p
                key={session.id}
                onClick={() => navigate(`/sessions/${session.id}`)}
              >
                {session.title} ({session.duration} min)
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Sessions;
