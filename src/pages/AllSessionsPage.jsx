import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../pages/AllSessionsPage.css';
import { PropagateLoader } from 'react-spinners';

function AllSessions() {
  const [sessions, setSessions] = useState([]);
  const [openDescription, setOpenDescription] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState('Peter Morgan');
  const [selectedDuration, setSelectedDuration] = useState('3');
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    axios
      .get(`${API_URL}/sessions`)
      .then((response) => {
        setSessions(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const toggleDescription = (sessionId) => {
    if (openDescription === sessionId) {
      setOpenDescription(null);
    } else {
      setOpenDescription(sessionId);
    }
  };

  let authors = [];
  let durations = [];

  sessions.forEach((session) => {
    if (!authors.includes(session.author)) {
      authors.push(session.author);
    }

    if (!durations.includes(session.duration)) {
      durations.push(session.duration);
    }
  });

  const filteredSessions = sessions.filter((session) => {
    const authorMatch =
      selectedAuthor === 'all' || session.author === selectedAuthor;
    const durationMatch =
      selectedDuration === 'all' ||
      session.duration === Number(selectedDuration);
    return authorMatch && durationMatch;
  });

  return (
    <div className="all-sessions">
      <h2>All sessions</h2>
      {loading ? (
        <div className="spinner">
          <PropagateLoader />
        </div>
      ) : (
        <>
          <div className="filter-bar">
            <label>Author: </label>
            <select
              value={selectedAuthor}
              onChange={(e) => setSelectedAuthor(e.target.value)}
            >
              <option value="all">All</option>
              {authors.map((author, index) => (
                <option key={index} value={author}>
                  {author}
                </option>
              ))}
            </select>

            <label> Duration: </label>
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
            >
              <option value="all">All</option>
              {durations.map((duration, index) => (
                <option key={index} value={duration}>
                  {duration} min
                </option>
              ))}
            </select>
          </div>

          <div className="sessions-list">
            {filteredSessions.map((session) => (
              <div key={session.id} className="session-card">
                <h3>
                  {session.title}

                  <span onClick={() => toggleDescription(session.id)}>
                    {openDescription === session.id ? '▲' : '▼'}
                  </span>
                </h3>
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
        </>
      )}
    </div>
  );
}

export default AllSessions;
