// Category.jsx
import "./Category.css";
import { UseCategory } from "../store/Context";

const Category = () => {
  const { selectedCategory, setSelectedCategory } = UseCategory();
  const categories = [
    "All",
    "Movies",
    "Gaming",
    "Sports",
    "Courses",
    "ReactJS",
    "JavaScript",
    "System design",
    "Computer fundamentals",
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
