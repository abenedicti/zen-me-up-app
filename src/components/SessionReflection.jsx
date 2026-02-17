import { useState } from 'react';
import axios from 'axios';

function SessionReflection({ sessionId, userReflection }) {
  const [reflection, setReflection] = useState(userReflection || '');
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    axios
      .patch(`http://localhost:5003/sessions/${sessionId}`, {
        userReflection: reflection,
      })
      .then(() => setEditing(false))
      .catch((err) => console.error(err));
  };

  const handleDelete = () => {
    setReflection('');
    axios
      .patch(`http://localhost:5003/sessions/${sessionId}`, {
        userReflection: '',
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h3>Your feeling</h3>
      {editing ? (
        <>
          <textarea
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            rows={4}
            cols={50}
          />
          <br />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <p>{reflection || 'Write how do you feel after the meditation'}</p>
      )}
      <button onClick={() => setEditing(!editing)}>
        {editing ? 'Cancel' : 'Edit'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default SessionReflection;
