import { Outlet } from "react-router-dom";
import Header from "../Component/Pages/Shared/Header/Header";
import Footer from "../Component/Pages/Shared/Footer/Footer";
import LeftNav from "../Component/Pages/Shared/Left Nav/LeftNav";
import RightNav from "../Component/Pages/Shared/Right Nav/RightNav";

const Main = () => {
  return (
    <div>
      <Header />
      <div  className="flex justify-center">
        <main className="lg:grid flex flex-col grid-cols-3 lg:gap-x-56 ">
          <div>
            <LeftNav />
          </div>
          <div>Main Content</div>
          <div>
            <RightNav />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
