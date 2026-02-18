import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../pages/AllSessionsPage.css';

function AllSessions() {
  const [sessions, setSessions] = useState([]);
  const [openDescription, setOpenDescription] = useState(null);
  const toggleDescription = (sessionId) => {
    setOpenDescription(openDescription === sessionId ? null : sessionId);
  };

  useEffect(() => {
    axios
      .get('http://localhost:5003/sessions')
      .then((response) => {
        setSessions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!sessions.length) return <p>Loading...</p>;

  return (
    <div>
      <h2>All sessions</h2>
      <div className="sessions-list">
        {sessions.map((session) => (
          <div key={session.id} className="session-card">
            <h2>{session.title}</h2>
            <span onClick={() => toggleDescription(session.id)}>
              {openDescription === session.id ? '▲' : '▼'}
            </span>
            {openDescription === session.id && (
              <div className="session-details">
                <p>Author: {session.author}</p>
                <p>Duration: {session.duration} min</p>
                <p>{session.description}</p>
                <Link to={`/sessions/${session.id}`}>Let's go!</Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllSessions;
