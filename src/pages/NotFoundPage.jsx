import { useNavigate } from 'react-router-dom';
import animErrorPage from '../assets/404.json';
import Lottie from 'lottie-react';
import '../pages/NotFoundPage.css';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div lottie-container>
        <Lottie animationData={animErrorPage} loop={true} />
      </div>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default NotFoundPage;
