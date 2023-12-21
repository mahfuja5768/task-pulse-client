import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
// import Footer from "../shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="w-full h-screen max-h-screen font-bodyFont ">
      <Navbar/>
      <div className="w-full h-[88vh] mx-auto gap-20 ">
      <Outlet />
      {/* <Footer></Footer> */}
    </div>
  </div>
  );
};

export default MainLayout;
