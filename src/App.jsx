import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/Home.jsx';
import Programs from './pages/ProgramsPage';
import Sessions from './pages/SessionsPage';
import SessionDetailsPage from './pages/SessionDetailsPage';
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:programId/sessions" element={<Sessions />} />
          <Route path="/sessions/:sessionId" element={<SessionDetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
