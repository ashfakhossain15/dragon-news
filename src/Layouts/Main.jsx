import { Outlet } from "react-router-dom";
import Header from "../Component/Pages/Shared/Header/Header";
import Footer from "../Component/Pages/Shared/Footer/Footer";
import LeftNav from "../Component/Pages/Shared/Left Nav/LeftNav";
import RightNav from "../Component/Pages/Shared/Right Nav/RightNav";

const Main = () => {
  return (
    <div>
      <Header />
      <div className=" max-w-7xl mx-auto">
        <main className="lg:grid  grid-cols-4 flex    lg:gap-x-10 ">
          <div className="col-span-1">
            <LeftNav />
          </div>

          <div className="w-full col-span-2">
            <Outlet />
          </div>
          <div className="col-span-1 flex justify-end">
            <RightNav />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
