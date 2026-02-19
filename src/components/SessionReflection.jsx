import { useState } from 'react';
import axios from 'axios';
import '../components/SessionReflection.css';

function SessionReflection({ sessionId, userReflection }) {
  const [reflection, setReflection] = useState(userReflection || '');
  const [editing, setEditing] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;
  const handleSave = () => {
    axios
      .patch(`${API_URL}/sessions/${sessionId}`, {
        userReflection: reflection,
      })
      .then(() => setEditing(false))
      .catch((err) => console.error(err));
  };

  const handleDelete = () => {
    setReflection('');
    axios
      .patch(`${API_URL}/sessions/sessions/${sessionId}`, {
        userReflection: '',
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="reflection-content">
      <h3>Your feeling</h3>
      {editing ? (
        <>
          <textarea
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            rows={4}
            cols={30}
          />
          <br />
          <button onClick={handleSave}>Save</button>
          {/* make the delete btn appear when start tapping */}
          {reflection.trim() !== '' && (
            <button onClick={handleDelete}>Delete</button>
          )}
          {/* make the cancel btn appear when empty textarea */}
          {reflection.trim() === '' && (
            <button onClick={() => setEditing(false)}>Cancel</button>
          )}
        </>
      ) : (
        <p>{reflection || 'Write how do you feel after the meditation'}</p>
      )}
      {!editing && <button onClick={() => setEditing(true)}>Edit</button>}
    </div>
  );
}

export default SessionReflection;
