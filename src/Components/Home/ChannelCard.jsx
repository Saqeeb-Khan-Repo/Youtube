// ChannelCard.jsx

const ChannelCard = ({ channelDetails }) => {
  const { snippet } = channelDetails;
  const title = snippet?.channelTitle || snippet?.title;
  const thumbnails = snippet?.thumbnails;
  const avatar =
    thumbnails?.high?.url ||
    thumbnails?.medium?.url ||
    thumbnails?.default?.url;

  return (
    <div className="channel-card">
      <div className="channel-avatar">
        <img src={avatar} alt={title} />
      </div>
      <div className="channel-info">
        <h3 className="channel-title">{title}</h3>
        {/* you can add subs later if you fetch channels API */}
        {/* <p className="channel-subs">1.2M subscribers</p> */}
      </div>
    </div>
  );
};

export default ChannelCard;
