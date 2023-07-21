import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsight from "./EditorsInsight";

const News = () => {
  const News = useLoaderData();

  const { category_id, _id, title, image_url, details } = News;
  return (
    <div>
      <h1 className="p-4 text-lg font-semibold mb-1">Dragon News </h1>
      <div className="card w-full bg-base-100 shadow-xl border border-slate-100">
        <figure className="p-5">
          <img src={image_url} alt="Image" />
        </figure>
        <div className="card-body space-y-5 p-5">
          <h2 className="card-title font-bold">{title}</h2>
          <p>{details}</p>
          <div className="card-actions justify-start">
            <Link to={`/category/${category_id}`}>
              <button className="btn hover:bg-green-500 hover:text-black duration-500  text-white bg-red-500">
                <FaArrowLeft />
                All News In this category
              </button>
            </Link>
          </div>
        </div>
      </div>
      <section><EditorsInsight/></section>
    </div>
  );
};

export default News;
