// App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import SideBar from "./Components/sidebar/SideBar";
import "./App.css";

import Home from "./Components/Home/Home";
import Channel from "./Components/Pages/Channel";
import History from "./Components/Pages/History";
import PlayList from "./Components/Pages/PlayList";
import WatchLater from "./Components/Pages/WatchLater";
import LikedVideos from "./Components/Pages/WatchLater";
import Downloads from "./Components/Pages/Downloads";
import Settings from "./Components/Pages/Settings";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const isMobile = window.innerWidth <= 765;

  return (
    <Router>
      <div className="app-layout">
        <Header onToggleSidebar={toggleSidebar} />

        {/* main content row: ONLY content here */}
        <div className="app-main">
          <main className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/channel" element={<Channel />} />
              <Route path="/history" element={<History />} />
              <Route path="/playlist" element={<PlayList />} />
              <Route path="/watch-later" element={<WatchLater />} />
              <Route path="/liked-videos" element={<LikedVideos />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>

        {/* sidebar as overlay, NOT part of flex layout */}
        <SideBar isOpen={isSidebarOpen} />

        {isMobile && isSidebarOpen && (
          <div className="sidebar-backdrop" onClick={toggleSidebar} />
        )}
      </div>
    </Router>
  );
};

export default App;
