// Category.jsx
import "./Category.css";

const Category = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    "Nova Design",
    "Greatstack",
    "ReactJS",
    "JavaScript",
    "web development",
    "JS Mastery",
    "codewithharry",
    "Cricket",
    "Nodejs",
    "Fireship",
    "Microservices",
    "freecodecamp",
    "Low level design",
    "high level design",
    "system design",
    "computer fundamentals",
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
