import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/Home.jsx';
import Programs from './pages/ProgramsPage';
import Sessions from './pages/SessionsPage';
import VideoPlayer from './components/VideoPlayer';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/sessions" element={<Sessions />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
