import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBookmark,
  FaEye,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import moment from "moment";

const NewsCard = ({ news }) => {
  const { isMore, setMore } = useState("");
  const handleReadMore = () => {
    setMore(!false);
  };

  const { _id, title, rating, total_view, image_url, details, author } = news;

  return (
    <div>
      <div className="w-full bg-white border border-stone-100  rounded-lg shadow-xl mb-6 ">
        {/* Header */}
        <div className="flex  items-center px-4 py-3 border-b">
          <div className="flex">
            <img
              src={author.img}
              alt="Profile"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <div className="text-xl font-medium text-black">
                {author.name}
              </div>
              <div className="text-gray-600 text-sm">
                {moment(author.published_date).format("YYYY-MM-DD")}
              </div>
            </div>
          </div>
          <div className="flex mr-4 flex-grow justify-end">
            <button className="mr-2">
              <FaBookmark />
            </button>
            <button>
              <FaShareAlt />
            </button>
          </div>
        </div>

        {/* Main Part */}
        <div className="px-4 py-2">
          <div className="font-bold text-xl mb-2">{title}</div>
          <img
            src={image_url}
            alt="Image"
            className="w-full h-96 object-cover mb-4"
          />
          <p className="text-gray-700 text-base">
            {details.length < 250 ? (
              <p>{details}</p>
            ) : (
              <p>
                {details.slice(0, 250)} ...{" "}
                <Link
                  onClick={handleReadMore}
                  to={`/news/${_id}`}
                  className="text-cyan-400 "
                >
                  Read More
                </Link>
              </p>
            )}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center px-4 py-3 border-t">
          <div className="flex items-center">
            {/* Rating Icon SVG */}
            <span className="ml-1 text-gray-600">
              {rating.number}
              <Rating
                placeholderRating={rating.number}
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStar />}
                readonly
                className="ms-2"
              />
            </span>
          </div>
          <div className="flex-grow"></div>
          <div className="flex items-center ml-4">
            {/* Views Icon SVG */}
            <span className="ml-1 items-center gap-2 text-gray-600 flex">
              {total_view}
              <FaEye />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
