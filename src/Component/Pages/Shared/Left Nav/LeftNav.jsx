import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5500/categories")
      .then((res) => res.json())

      .then((data) => setCategories(data))

      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="space-y-5 max-w-xl sticky top-8">
      <h2>All categories</h2>

      <div className="divide-y">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="px-6 py-3 text-lg font-semibold hover:bg-slate-300 rounded-md transition duration-500 flex w-full flex-col "
          >
            <button className="text-start">{category.name}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
