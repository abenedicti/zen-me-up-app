function SessionInfo({ title, author, duration, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Author : {author}</p>
      <p>Duration : {duration} min</p>
      <p>{description}</p>
    </div>
  );
}

export default SessionInfo;
