import moment from "moment/moment";

const EditorsInsight = () => {
  return (
    <div className="mt-7 flex gap-5">
      <div className="card w-96 mt bg-base-100 shadow-xl">
        <figure className="p-3">
          <img
            src="/1.png"
            alt="Shoes" className="w-80"

          />
        </figure>
        <div className="card-body items-start relative ">
          <h2 className="card-title mb-5">
            21 The Most Stylish Wedding Guest Dresses For Spring
          </h2>
          <footer className="bg-slate-200 px-8 block w-full  absolute bottom-0 right-0 rounded-b-lg py-2 ml-0">
            <p>{moment().format("LL")}</p>
          </footer>
        </div>
      </div>
      <div className="card w-96 mt bg-base-100 shadow-xl">
        <figure className="p-3">
          <img
            src="/2.png"
            alt="Shoes" className="w-80"

          />
        </figure>
        <div className="card-body items-start relative ">
          <h2 className="card-title mb-5">
            21 The Most Stylish Wedding Guest Dresses For Spring
          </h2>
          <footer className="bg-slate-200 px-8 block w-full  absolute bottom-0 right-0 rounded-b-lg py-2 ml-0">
            <p>{moment().format("LL")}</p>
          </footer>
        </div>
      </div>
      <div className="card w-96 mt bg-base-100 shadow-xl">
        <figure className="p-3">
          <img
            src="/3.png"
            alt="Shoes" className="w-80"

          />
        </figure>
        <div className="card-body items-start relative ">
          <h2 className="card-title mb-5">
            21 The Most Stylish Wedding Guest Dresses For Spring
          </h2>
          <footer className="bg-slate-200 px-8 block w-full  absolute bottom-0 right-0 rounded-b-lg py-2 ml-0">
            <p>{moment().format("LL")}</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default EditorsInsight;
