import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';
import Search from '../components/Search.jsx';
function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/programs">Programs </Link>
          </li>
          <li>
            <Link to="/sessions">Sessions</Link>
          </li>
          <li>
            <Search />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
