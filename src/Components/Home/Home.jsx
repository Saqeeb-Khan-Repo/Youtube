// Home.jsx
import { useState, useEffect } from "react";
import { fetchFromApi } from "../utils/fetchApi.js";
import Category from "./Category.jsx";
import VideoCard from "./VideoCard.jsx";
import ChannelCard from "./ChannelCard.jsx";
import { UseCategory } from "../store/Context.jsx";

const Home = ({searchTerm}) => {
  const { selectedCategory } = UseCategory();
  const [videos, setVideos] = useState([]);
  const [playingVideoId, setPlayingVideoId] = useState(null); // NEW

  useEffect(() => {
    const query = searchTerm || selectedCategory;
    fetchFromApi(`search?part=snippet&q=${query}`).then((data) => {
      setVideos(data.items || []);
      setPlayingVideoId(null); // close player when category changes
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="pages">
      <Category selectedCategory={selectedCategory} />
      <div className="videos-grid">
        {videos.map((item, idx) => (
          <div key={idx}>
            {item.id?.videoId && <VideoCard video={item} />}
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
