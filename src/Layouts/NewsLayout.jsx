import { Outlet } from "react-router-dom";
import Footer from "../Component/Pages/Shared/Footer/Footer";
import Header from "../Component/Pages/Shared/Header/Header";
import RightNav from "../Component/Pages/Shared/Right Nav/RightNav";

const NewsLayout = () => {
  return (
    <div>
      <section>
        <div>
          <Header />
          <div className="flex justify-center">
            <main className="lg:grid flex gap-x-10 px-14 flex-col grid-cols-4  lg:gap-x-44 ">
              <div className="col-span-3">
                <Outlet />
              </div>
              <div className="w-full grid-cols-1 cols-1">
                <RightNav />
              </div>
            </main>
          </div>
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default NewsLayout;
