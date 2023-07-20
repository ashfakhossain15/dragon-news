const NewsCard = ({ news }) => {
  const { _id, title, rating, total_view, thumbnail_url, details, author } =
    news;

  return (
    <div>
      <div className="w-full bg-white rounded-lg shadow-md ">
        {/* Header */}
        <div className="flex items-center px-4 py-3 border-b">
          <img
            src={author.img}
            alt="Profile"
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <div className="text-xl font-medium text-black">{author.name}</div>
            <div className="text-gray-600 text-sm">{author.published_date}</div>
          </div>
          <div className="flex-grow">
            <button className="mr-2">
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Bookmark Icon SVG */}
              </svg>
            </button>
            <button>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Share Icon SVG */}
              </svg>
            </button>
          </div>
        </div>

        {/* Main Part */}
        <div className="px-4 py-2">
          <div className="font-bold text-xl mb-2">{title}</div>
          <img
            src={thumbnail_url}
            alt="Thumbnail"
            className="w-full h-96 object-cover mb-4"
          />
          <p className="text-gray-700 text-base">{details}</p>
        </div>

        {/* Footer */}
        <div className="flex items-center px-4 py-3 border-t">
          <div className="flex items-center">
            {/* Rating Icon SVG */}
            <span className="ml-1 text-gray-600">{rating.number}</span>
          </div>
          <div className="flex-grow"></div>
          <div className="flex items-center ml-4">
            {/* Views Icon SVG */}
            <span className="ml-1 text-gray-600">{total_view} views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
