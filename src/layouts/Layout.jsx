/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import logo from "../../src/assets/logo.png";
import { motion } from "framer-motion";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Layout = ({ children }) => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Successfully log out!",
          icon: "success",
          confirmButtonText: "Done",
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="drawer ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full shadow-lg bg-[#ecd1d1] fixed z-10">
          <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
            <div className="navbar">
              <div className="navbar-start  flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="navbar-start flex justify-end lg:block">
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  <Link to={"/"}>
                    <img
                      className="mdl:w-20 mdl:h-20  md:w-18  md:h-18 w-10"
                      src={logo}
                      alt="logo"
                    />
                  </Link>
                </motion.div>
              </div>
              <div className="navbar-center flex-none hidden lg:block">
                <ul className="menu menu-horizontal text-lg font-semibold">
                  <Navbar></Navbar>
                </ul>
              </div>
              <div className="navbar-end hidden lg:flex">
                <div className="hidden mdl:inline-flex items-center ">
                  {user ? (
                    <div className="flex  gap-3">
                      <Link to="/">
                        <button
                          onClick={handleLogout}
                          className="btn  bg-textBlue hover:border-textBlue text-white hover:border-4  border-4 border-transparent border-textBlue hover:text-textBlue hover:bg-transparent">
                          Log out
                        </button>
                      </Link>
                    </div>
                  ) : (
                    <Link to="/login">
                      <button className="btn  bg-textBlue hover:border-textBlue text-white hover:border-4  border-4 border-transparent border-textBlue hover:text-textBlue hover:bg-transparent">
                        Login
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side z-10 to-black">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-[#d2999b]">
          <div className="flex flex-col items-center gap-7">
            <ul className="flex flex-col text-base gap-7">
              <Link
                to="/"
                className="flex items-center gap-1 font-semibold  hover:text-gray-700 cursor-pointer duration-300 nav-link"
              >
                <motion.li
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                >
                  Home
                </motion.li>
              </Link>
              <Link
                to="/about"
                className="flex items-center gap-1 font-semibold hover:text-gray-700 cursor-pointer duration-300 nav-link"
              >
                <motion.li
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                >
                  About
                </motion.li>
              </Link>

              <Link
                to="/about"
                className="flex items-center gap-1 font-semibold hover:text-gray-700 cursor-pointer duration-300 nav-link"
              >
                <motion.li
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                >
                  <Link
                    to="/features"
                    className="flex items-center gap-1 -ms-5 font-semibold hover:text-gray-700 cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.1,
                        ease: "easeIn",
                      }}
                    >
                      Features
                    </motion.li>
                  </Link>
                </motion.li>
              </Link>

              {!user && (
                <Link
                  href="/signUp"
                  className="flex items-center gap-1 font-semibold hover:text-gray-700 cursor-pointer duration-300 nav-link"
                >
                  <motion.li
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: 0.1,
                      ease: "easeIn",
                    }}
                  >
                    Register
                  </motion.li>
                </Link>
              )}

              {user ? (
                <div className="flex flex-col gap-3">
                  <img
                    className="w-12 rounded-full h-12"
                    src={user?.photoURL}
                    alt=""
                  />
                  <Link to="/">
                    <button
                      onClick={handleLogout}
                      className="btn  bg-textBlue hover:border-textBlue text-white hover:border-4  border-4 border-transparent border-textBlue hover:text-textBlue hover:bg-transparent"
                    >
                      Log out
                    </button>
                  </Link>
                </div>
              ) : (
                <Link to="/login">
                  <button className="btn  bg-textBlue hover:border-textBlue text-white hover:border-4  border-4 border-transparent border-textBlue hover:text-textBlue hover:bg-transparent">
                    Login
                  </button>
                </Link>
              )}
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
