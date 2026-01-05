// VideoCard.jsx
const VideoCard = ({ video, onPlay }) => {
  const { snippet } = video;
  const thumbnail = snippet?.thumbnails?.medium?.url;
  const title = snippet?.title;
  const channelTitle = snippet?.channelTitle;
  const videoId = video?.id?.videoId;

  if (!videoId) return null;

  return (
    <div
      className="video-card"
      onClick={() => onPlay(videoId)}
      style={{ cursor: "pointer" }}
    >
      <div className="video-thumb">
        <img src={thumbnail} alt={title} />
      </div>

      <div className="video-info">
        <h3 className="video-title">{title}</h3>
        <p className="video-channel">{channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoCard;