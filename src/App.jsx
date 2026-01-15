// App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./Components/Header/Header";
import SideBar from "./Components/sidebar/SideBar";
import "./App.css";

import {
  Home,
  Channel,
  Downloads,
  History,
  LikedVideos,
  PlayList,
  Settings,
  WatchLater,
} from "./Components/Pages/index.js";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const isMobile = window.innerWidth <= 765;
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Router>
      <div className="app-layout bg-black">
        <Header
          onToggleSidebar={toggleSidebar}
          onSearch={(term) => setSearchTerm(term)}
        />

        <div className="app-main bg-black text-white font-bold">
          <main className="app-content">
            <Routes>
              <Route path="/" element={<Home searchTerm={searchTerm} />} />
              <Route path="/Youtube" element={<Home />} />

              <Route path="/channel" element={<Channel />} />
              <Route path="/history" element={<History />} />
              <Route path="/playlist" element={<PlayList />} />
              <Route path="/watch-later" element={<WatchLater />} />
              <Route path="/liked-videos" element={<LikedVideos />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/settings" element={<Settings />} />
              <Route
                path="*"
                element={
                  <div className="not-found">
                    <h1 className="h1">404 NOT FOUND</h1>
                    <Link to="/" className="h1">
                      Go to Home
                    </Link>
                  </div>
                }
              />
            </Routes>
          </main>
        </div>

        {/* sidebar as overlay, NOT part of flex layout */}
        <SideBar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

        {isMobile && isSidebarOpen && (
          <div className="sidebar-backdrop" onClick={toggleSidebar} />
        )}
      </div>
    </Router>
  );
};

export default App;
