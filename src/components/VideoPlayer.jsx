import '../components/VideoPlayer.css';
function VideoPlayer({ session }) {
  if (!session) return null;
  return (
    <div
      className="player-bg"
      style={{ backgroundImage: `url(${session.imgUrl})` }}
    >
      {/* controls allowed to : play/pause, progress bar, volume, duration and upload the audio */}
      <audio controls preload="none">
        <source src={session.audioUrl} type="audio/mp3" />
      </audio>
    </div>
  );
}

export default VideoPlayer;
