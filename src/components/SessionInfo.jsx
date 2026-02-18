import '../components/SessionInfo.css';
function SessionInfo({ title, author, duration, description }) {
  return (
    <div className="session-infos">
      <h2>{title}</h2>
      <p>Author : {author}</p>
      <p>Duration : {duration} min</p>
      <p className="duration-style">{description}</p>
    </div>
  );
}

export default SessionInfo;
