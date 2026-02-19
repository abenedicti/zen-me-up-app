import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../pages/ProgramsPage.css';

function Programs() {
  const [programs, setPrograms] = useState([]);
  const [openDescription, setOpenDescription] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const toggleDescription = (programId) => {
    setOpenDescription(openDescription === programId ? null : programId);
  };
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    axios
      .get(`${API_URL}/programs`)
      .then((response) => {
        setPrograms(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="main-content">
      <h2>All Programs</h2>
      {loading ? (
        <div className="spinner">Loading...</div>
      ) : (
        <div className="program-content">
          {programs.map((program) => (
            <div className="program" key={program.id}>
              <h3 onClick={() => navigate(`/programs/${program.id}/sessions`)}>
                {program.title}
              </h3>

              <span onClick={() => toggleDescription(program.id)}>
                {openDescription === program.id ? '▲' : '▼'}
              </span>

              {openDescription === program.id && <p>{program.description}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Programs;
