import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaX } from "react-icons/fa6";
import logo from "../assets/logo.png";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

export const Navbar = () => {
  const {user, logOut}= useAuth()
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout =()=>{
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
  }

  return (
    <div className="w-full h-16 lg:h-[18vh] sticky top-0 z-50 px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <div>
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
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[15px] gap-7 ">
            <Link
              to="/"
              className="flex items-center gap-1 font-semibold text-textBlue hover:text-textDark cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-1 font-semibold text-textBlue hover:text-textDark cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                About
              </motion.li>
            </Link>
            <Link
              to="/features"
              className="flex items-center gap-1 font-semibold text-textBlue hover:text-textDark cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                Features
              </motion.li>
            </Link>
            {!user && (
              <Link
                to="/signUp"
                className="flex items-center gap-1 font-semibold text-textBlue hover:text-textDark cursor-pointer duration-300 nav-link"
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.3 }}
                >
                  Register
                </motion.li>
              </Link>
            )}
          </ul>
        </div>
        <div className="hidden mdl:inline-flex items-center ">
          {user ? (
            <div className="flex  gap-3">
              <Link to="/">
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-md font-semibold text-textBlue text-[15px] border-4 border-textBlue bg-primary hover:bg-hoverColor duration-300"
                >
                  Log out
                </button>
              </Link>
            </div>
          ) : (
            <Link to="/login">
              <button className="px-4 py-2 rounded-md font-semibold text-textBlue text-[15px] border-4 border-textBlue bg-primary hover:bg-hoverColor duration-300">
                Login
              </button>
            </Link>
          )}
        </div>
        {/* icon */}
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 mdl:hidden flex items-center justify-center flex-col text-4xl text-textBlue cursor-pointer overflow-hidden group gap-1"
        >
          <span className="w-full h-[2px] bg-textBlue inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textBlue inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textBlue inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {showMenu && (
          <div className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full bg-[#d09b9d]  overflow-y-scroll scrollbarHide flex flex-col items-center px-4 py-10 relative"
            >
              <FaX
                onClick={() => setShowMenu(false)}
                className="text-3xl  hover:text-red-800 absolute cursor-pointer right-4 top-4"
              ></FaX>
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
                          className="px-4 py-2 rounded-md font-semibold hover:text-gray-700 text-[15px] hover:border-4  border-4 border-transparent  hover:bg-transparent hover:border-textBlue text-white bg-textBlue"
                        >
                          Log out
                        </button>
                      </Link>
                    </div>
                  ) : (
                    <Link to="/login">
                      <button className="px-4 py-2 rounded-md font-semibold  hover:text-gray-700 text-[15px] hover:border-4  border-4 border-transparent  hover:bg-transparent hover:border-textBlue text-white bg-textBlu">
                        Login
                      </button>
                    </Link>
                  )}
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};
