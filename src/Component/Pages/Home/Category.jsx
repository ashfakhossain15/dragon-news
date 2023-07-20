import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard";

const Category = () => {
  const { id } = useParams();
  const categoryNew = useLoaderData();
  console.log(categoryNew);
  return (
    <div>
      <h1>There is category : {categoryNew.length}</h1>
      {categoryNew.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
