import { Link } from "react-router-dom";
import bannerBg from "../assets/b-bg.jpg";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: `url('${bannerBg}')`,
        }}
      >
        <div className="hero-overlay bg-opacity-0 "></div>
        <div className="hero-content text-end">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex md:py-12 py-2 justify-end items-end flex-col"
          >
            <h1 className="mb-5 md:text-5xl text-3xl font-bold ">
              Your Tasks, Your Way
            </h1>
            <p className="mb-5 md:w-1/2 ">
              Tailor your workflow with customizable task lists. Whether it's
              personal goals or team projects, we've got you covered for
              seamless task management.
            </p>
            <Link to={"/login"}>
              {" "}
              <button className="btn  bg-textBlue hover:border-textBlue text-white hover:border-4  border-4 border-transparent border-textBlue hover:text-textBlue hover:bg-transparent">
                Let's Explore{" "}
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
