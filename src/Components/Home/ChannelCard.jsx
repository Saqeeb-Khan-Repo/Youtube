// ChannelCard.jsx
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetails }) => {
  if (!channelDetails) return null; // guard

  const { snippet, id } = channelDetails;
  if (!snippet) return null; // guard

  const channelId = id?.channelId || id;
  const title = snippet.channelTitle || snippet.title;
  const thumbnails = snippet.thumbnails || {};
  const avatar =
    thumbnails.high?.url || thumbnails.medium?.url || thumbnails.default?.url;

  if (!channelId) return null;

  return (
    <Link to={`/channel/${channelId}`} className="channel-card">
      <div className="channel-avatar">
        <img src={avatar} alt={title} />
      </div>
      <div className="channel-info">
        <h3 className="channel-title">{title}</h3>
      </div>
    </Link>
  );
};

export default ChannelCard;
