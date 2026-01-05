// Components/Pages/Channel.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFromApi } from "../utils/fetchApi.js";
import ChannelCard from "../Home/ChannelCard.jsx";
import VideoCard from "../Home/VideoCard.jsx";

const Channel = () => {
  const { id } = useParams(); // channelId from /channel/:id
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (!id) return;

    // fetch channel info
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetails(data?.items?.[0] || null);
    });

    // fetch channel videos
    fetchFromApi(
      `search?channelId=${id}&part=snippet&order=date&maxResults=20`
    ).then((data) => {
      setVideos(data?.items || []);
    });
  }, [id]);

  return (
    <div className="pages">
      {channelDetails && <ChannelCard channelDetails={channelDetails} />}

      <div className="videos-grid">
        {videos.map((item, idx) => (
          <div key={idx}>{item.id?.videoId && <VideoCard video={item} />}</div>
        ))}
      </div>
    </div>
  );
};

export default Channel;
