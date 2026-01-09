import "./SideBar.css";
import { FaHome, FaHistory } from "react-icons/fa";
import {
  MdOutlinePlaylistPlay,
  MdOutlineHistoryToggleOff,
  MdDownload,
  MdSettings,
} from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { Link } from "react-router-dom";

const SideBar = ({ isOpen, closeSidebar }) => {
  const navItems = [
    { label: "Home", to: "/", icon: <FaHome /> },
    { label: "Channel", to: "/channel", icon: <SiYoutubeshorts /> },
    { label: "History", to: "/history", icon: <FaHistory /> },
    { label: "Playlists", to: "/playlist", icon: <MdOutlinePlaylistPlay /> },
    {
      label: "Watch later",
      to: "/watch-later",
      icon: <MdOutlineHistoryToggleOff />,
    },
    { label: "Liked videos", to: "/liked-videos", icon: <AiFillLike /> },
    { label: "Downloads", to: "/downloads", icon: <MdDownload /> },
    { label: "Settings", to: "/settings", icon: <MdSettings /> },
  ];
  return (
    <nav className={`yt-sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="yt-sidebar-section">
        {navItems.map((item) => {
          return (
            <Link
              to={item.to}
              key={item.to}
              className="yt-nav-item  a"
              onClick={closeSidebar}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default SideBar;
