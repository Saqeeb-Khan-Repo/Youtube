import "./Header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { LuMic } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = ({ onToggleSidebar }) => {
  return (
    <header className="yt-header">
      <div className="yt-left">
        <button className="yt-icon-btn">
          <RxHamburgerMenu onClick={onToggleSidebar} />
        </button>
        <div className="yt-logo">
          <div className="yt-logo-icon">
            <Link to="/">
              <img
                src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
                alt="YouTube"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="yt-center">
        <div className="yt-search">
          <input placeholder="Search" />
          <button className="yt-search-btn">
            <CiSearch />
          </button>
        </div>
        <button className="yt-icon-btn mic">
          <LuMic />
        </button>
      </div>

      <div className="yt-right">
        <button className="yt-icon-btn">
          <BsThreeDotsVertical />
        </button>
        <button className="yt-signin-btn">
          <IoPersonCircleOutline className="profile-icon" />
          <span>Sign in</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
