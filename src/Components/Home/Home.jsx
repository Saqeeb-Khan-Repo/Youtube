// Home.jsx
import { useState, useEffect } from "react";
import { fetchFromApi } from "../utils/fetchApi.js";
import Category from "./Category.jsx";
import VideoCard from "./VideoCard.jsx";
import ChannelCard from "./ChannelCard.jsx";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Coding");
  const [videos, setVideos] = useState([]);
  const [playingVideoId, setPlayingVideoId] = useState(null); // NEW

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items || []);
      setPlayingVideoId(null); // close player when category changes
    });
  }, [selectedCategory]);

  return (
    <div className="pages">
      <Category
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="videos-grid">
        {videos.map((item, idx) => (
          <div key={idx}>
            {item.id?.videoId && (
              <VideoCard video={item} onPlay={(id) => setPlayingVideoId(id)} />
            )}
            {item.id?.channelId && <ChannelCard channelDetails={item} />}
          </div>
        ))}
      </div>
      // Home.jsx (only popup part shown)
      {playingVideoId && (
        <>
          <div
            className="inline-player-backdrop"
            onClick={() => setPlayingVideoId(null)}
          />
          <div className="inline-player">
            <div className="inline-player-inner">
              <div className="inline-player-actions">
                <button
                  className="inline-player-btn"
                  onClick={() => setPlayingVideoId(null)}
                >
                  Close
                </button>
                <button
                  className="inline-player-btn danger"
                  onClick={() => setPlayingVideoId(null)}
                >
                  Cancel Video
                </button>
              </div>

              <div className="inline-player-frame-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${playingVideoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
