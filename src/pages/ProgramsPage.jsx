import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../pages/ProgramsPage.css';

function Programs() {
  const [programs, setPrograms] = useState([]);
  const [openDescription, setOpenDescription] = useState(null);
  const navigate = useNavigate();

  const toggleDescription = (programId) => {
    setOpenDescription(openDescription === programId ? null : programId);
  };

  useEffect(() => {
    axios
      .get('http://localhost:5003/programs')
      .then((response) => {
        setPrograms(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="main-content">
      <h2>Programmes</h2>
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
    </div>
  );
}

export default Programs;
