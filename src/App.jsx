import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/Home.jsx';
import Programs from './pages/ProgramsPage';
import Sessions from './pages/SessionsPage';
import SessionDetails from './pages/SessionDetailsPage';
import AllSessions from './pages/AllSessionsPage.jsx';
import Footer from './components/Footer.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
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
          <Route path="/sessions" element={<AllSessions />} />
          <Route path="/sessions/:sessionId" element={<SessionDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
