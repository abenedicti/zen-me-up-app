import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../pages/SessionsPage.css';

function Sessions() {
  const { programId } = useParams();
  const [sessions, setSessions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5003/sessions?programId=${programId}`)
      .then((response) => setSessions(response.data))
      .catch((error) => console.log(error));
  }, [programId]);
  return (
    <div>
      <h2>All sessions</h2>
      <div className="session-content">
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
  );
}
export default Sessions;
