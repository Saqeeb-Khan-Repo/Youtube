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
<<<<<<< HEAD:src/Components/Pages/Home.jsx

  const handlePlay = (id) => {
    setPlayingVideoId(id);
  };
=======
>>>>>>> f35221dde61624f29a0cc5403bf5206ce50c3165:src/Components/Home/Home.jsx

  useEffect(() => {
    const query = searchTerm || selectedCategory;

    fetchFromApi(`search?part=snippet&q=${query}`).then((data) => {
<<<<<<< HEAD:src/Components/Pages/Home.jsx
      setVideos(data.items || []);
=======
      setVideos(data?.items || []);
>>>>>>> f35221dde61624f29a0cc5403bf5206ce50c3165:src/Components/Home/Home.jsx
      setPlayingVideoId(null);
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="pages">
      <Category selectedCategory={selectedCategory} />

      <div className="videos-grid">
        {videos.map((item, idx) => (
          <div key={idx}>
<<<<<<< HEAD:src/Components/Pages/Home.jsx
            {item.id?.videoId && <VideoCard video={item} onPlay={handlePlay} />}
            {item.id?.channelId && <ChannelCard channelDetails={item} />}
=======
            {item.id?.videoId && (
              <VideoCard
                video={item}
                onPlay={setPlayingVideoId}
              />
            )}

            {item.id?.channelId && (
              <ChannelCard channelDetails={item} />
            )}
>>>>>>> f35221dde61624f29a0cc5403bf5206ce50c3165:src/Components/Home/Home.jsx
          </div>
        ))}
      </div>

<<<<<<< HEAD:src/Components/Pages/Home.jsx
      {/* Popup player */}
=======
>>>>>>> f35221dde61624f29a0cc5403bf5206ce50c3165:src/Components/Home/Home.jsx
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
              </div>

              <div className="inline-player-frame-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${playingVideoId}?autoplay=1`}
                  title="YouTube video player"
<<<<<<< HEAD:src/Components/Pages/Home.jsx
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
=======
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
>>>>>>> f35221dde61624f29a0cc5403bf5206ce50c3165:src/Components/Home/Home.jsx
                  allowFullScreen
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