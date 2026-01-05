// Components/SearchBar.jsx
import { useState } from "react";
import "./SearchBar.css";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    onSearch(term.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="yt-search-form">
      <input
        className="yt-search-input"
        type="text"
        placeholder="Search"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button type="submit" className="yt-search-btn">
        <CiSearch />
      </button>
    </form>
  );
};

export default SearchBar;
