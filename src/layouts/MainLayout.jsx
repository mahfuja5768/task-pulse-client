// import { Outlet } from "react-router-dom";
// import { Navbar } from "../components/Navbar";
// import Footer from "../components/Footer";

// const MainLayout = () => {
//   return (
//     <div className="w-full h-screen max-h-screen font-bodyFont ">
//       <Navbar/>
//       <div className="w-full h-[88vh] mx-auto flex-col overflow-x-hidden   xl:flex items-center gap-20 justify-center">
//       <Outlet />
//       <Footer></Footer>
//     </div>
//   </div>
//   );
// };

// export default MainLayout;

import { Outlet } from "react-router-dom";
import Layout from "./Layout";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="font-inter">
    <Layout>
    <div className=" pt-0 min-h-[calc(100vh-306px)]">
      <Outlet />
      <Footer></Footer>
    </div>
    </Layout >
  </div>
  );
};

export default MainLayout;
