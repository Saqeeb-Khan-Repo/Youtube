import { useState, useEffect } from "react";
import { fetchFromApi } from "../utils/fetchApi.js";
import Category from "../Home/Category.jsx";
import VideoCard from "../Home/VideoCard.jsx";
import ChannelCard from "../Home/ChannelCard.jsx";
import { UseCategory } from "../store/Context.jsx";

const Home = ({ searchTerm }) => {
  const { selectedCategory } = UseCategory();
  const [videos, setVideos] = useState([]);
  const [playingVideoId, setPlayingVideoId] = useState(null);

  const handlePlay = (id) => {
    setPlayingVideoId(id);
  };
  useEffect(() => {
    const query = searchTerm || selectedCategory;

    fetchFromApi(`search?part=snippet&q=${query}`).then((data) => {
      setVideos(data.items || []);
      setPlayingVideoId(null);
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="pages">
      <Category selectedCategory={selectedCategory} />

      <div className="videos-grid">
        {videos.map((item, idx) => (
          <div
            key={
              item.id?.videoId ||
              item.id?.channelId ||
              item.id?.playlistId ||
              idx
            }
          >
            {item.id?.videoId && <VideoCard video={item} onPlay={handlePlay} />}
            {item.id?.channelId && <ChannelCard channelDetails={item} />}
            {item.id?.playlistId && <div>Playlist: {item.snippet?.title}</div>}
          </div>
        ))}
      </div>

      {playingVideoId && (
        <>
          <div
            className="inline-player-backdrop"
            onClick={() => setPlayingVideoId(null)}
          />
          <div className="inline-player">
            {/* Add loading spinner if needed */}
            <div className="inline-player-inner">
              <div className="inline-player-actions">
                <button
                  className="inline-player-btn"
                  onClick={() => setPlayingVideoId(null)}
                >
                  Close
                </button>
              </div>
              <div className="inline-player-frame-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${playingVideoId}?autoplay=1&rel=0`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
