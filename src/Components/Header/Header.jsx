import { useState } from "react";
import "./Header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { LuMic } from "react-icons/lu";
import { BsThreeDotsVertical, BsX } from "react-icons/bs"; // add BsX
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import SearchBar from "../Home/SearchBar";

const Header = ({ onToggleSidebar, onSearch }) => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
  };

  const closeMobileSearch = () => {
    setIsMobileSearchOpen(false);
  };

  return (
    <header className="yt-header">
      <div className="yt-left">
        <button className="yt-icon-btn" onClick={onToggleSidebar}>
          <RxHamburgerMenu />
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

      <div className={`yt-center ${isMobileSearchOpen ? "mobile-open" : ""}`}>
        <div className="yt-search">
          <SearchBar onSearch={onSearch} />
        </div>
        <button className="yt-icon-btn mic text-4xl">
          <LuMic />
        </button>
        {/* Close button - only show when mobile search is open */}
        {isMobileSearchOpen && (
          <button
            className="yt-icon-btn mobile-search-close"
            onClick={closeMobileSearch}
          >
            <BsX />
          </button>
        )}
      </div>

      <div className="yt-right">
        <button className="yt-icon-btn">
          <BsThreeDotsVertical />
        </button>
        {/* Mobile search icon */}
        {!isMobileSearchOpen && (
          <button
            className="yt-icon-btn mobile-search"
            onClick={toggleMobileSearch}
          >
            <CiSearch />
          </button>
        )}
        <button className="yt-signin-btn">
          <IoPersonCircleOutline className="profile-icon" />
          <span>Sign in</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
