import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../pages/AllSessionsPage.css';

function AllSessions() {
  const [sessions, setSessions] = useState([]);
  const [openDescription, setOpenDescription] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState('Peter Morgan');
  const [selectedDuration, setSelectedDuration] = useState('3');

  useEffect(() => {
    axios
      .get('http://localhost:5003/sessions')
      .then((response) => setSessions(response.data))
      .catch((error) => console.log(error));
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

  if (!sessions.length) return <p>Loading...</p>;

  return (
    <div>
      <h2>All sessions</h2>

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
            <h2>
              {session.title}

              <span onClick={() => toggleDescription(session.id)}>
                {openDescription === session.id ? '▲' : '▼'}
              </span>
            </h2>
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
