import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Sessions() {
  const { programId } = useParams();
  const [sessions, setSessions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5003/sessions?programId=${programId}`)
      .then((res) => setSessions(res.data))
      .catch((err) => console.error(err));
  }, [programId]);
  return (
    <div>
      <h2>All sessions</h2>
      {sessions.map((session) => (
        <div
          key={session.id}
          onClick={() => navigate(`/sessions/${session.id}`)}
        >
          {session.title} ({session.duration} min)
        </div>
      ))}
    </div>
  );
}
export default Sessions;
