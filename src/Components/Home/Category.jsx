// Category.jsx
import "./Category.css";
import { UseCategory } from "../store/Context";

const Category = () => {
  const { selectedCategory, setSelectedCategory } = UseCategory();
  const categories = [
    "All",
    "Movie",
    "Gaming",
    "Live",
    "News",
    "Sports",
    "Programming",
    "ReactJS",
    "JavaScript",
    "Web development",
    "NodeJS",
    "System design",
    "Computer fundamentals",
    "Podcasts",
    "Recently uploaded",
    "Watched",
  ];


  return (
    <nav className="yt-sidebar1">
      <div className="yt-sidebar-section1">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`yt-nav-item1 ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            <span>{cat}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Category;
