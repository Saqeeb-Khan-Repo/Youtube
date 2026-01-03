import "./SideBar.css";
import { RxHamburgerMenu } from "react-icons/rx";
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

const SideBar = ({ isOpen }) => {
  return (
    <nav className={`yt-sidebar ${isOpen ? "open" : "closed"}`}>
      {/* Top Section */}
      {/* <div className="yt-sidebar-top">
        <button className="yt-icon">
          <RxHamburgerMenu />
        </button>

        <div className="yt-logo">
          <img
            src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
            alt="YouTube"
          />
        </div>
      </div> */}

      {/* Navigation */}
      <div className="yt-sidebar-section">
        <Link to="/" className="yt-nav-item active a">
          <FaHome />
          <span>Home</span>
        </Link>

        <Link to="/channel" className="yt-nav-item a">
          <SiYoutubeshorts />
          <span>Channel</span>
        </Link>

        <Link to="/history" className="yt-nav-item a">
          <FaHistory />
          <span>History</span>
        </Link>

        <Link to="/playlist" className="yt-nav-item a">
          <MdOutlinePlaylistPlay />
          <span>Playlists</span>
        </Link>

        <Link to="/watch-later" className="yt-nav-item a">
          <MdOutlineHistoryToggleOff />
          <span>Watch later</span>
        </Link>

        <Link to="/liked-videos" className="yt-nav-item a">
          <AiFillLike />
          <span>Liked videos</span>
        </Link>

        <Link to="/downloads" className="yt-nav-item a">
          <MdDownload />
          <span>Downloads</span>
        </Link>

        <Link to="/settings" className="yt-nav-item a">
          <MdSettings />
          <span>Settings</span>
        </Link>
      </div>
    </nav>
  );
};

export default SideBar;
