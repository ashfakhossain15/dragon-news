const Loading = () => {
  return (
    <div>
      <div className="flex space-x-3 items-center justify-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-rose-500 border-solid h-12 w-12"></div>
        <div className="animate-spin rounded-full border-t-4 border-amber-300 border-solid h-12 w-12"></div>
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-12 w-12"></div>
        <span className="ml-4 text-blue-500 text-2xl font-semibold">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loading;
