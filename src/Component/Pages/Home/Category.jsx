import { useLoaderData, useParams } from "react-router-dom";

const Category = () => {
  const { id } = useParams();
  const category = useLoaderData();
  return (
    <div>
      <h1>There is category : {id}</h1>
    </div>
  );
};

export default Category;
