import { Link } from 'react-router-dom';
import logo from '../assets/logoMedApp.png';
import './Navbar.css';
function Navbar() {
  return (
    <div className="navbar">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul>
          <li>
            <Link to="/programs">Programs</Link>
          </li>
          <li>
            <Link to="/sessions">Sessions</Link>
          </li>
        </ul>
      </div>
      <div>
        <p>⌕</p>
      </div>
    </div>
  );
}
export default Navbar;
