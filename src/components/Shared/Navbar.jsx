import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";


const Navbar = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-container  mx-auto py-1 font-titleFont flex items-center justify-between">
      <div className="hidden mdl:inline-flex items-center gap-7">
        <ul className="flex text-[15px] gap-7 text-lg">
          <Link
            to="/"
            className="flex items-center gap-1 font-bold hover:text-textBlue text-black cursor-pointer duration-300 nav-link"
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
            className="flex items-center gap-1 font-bold hover:text-textBlue text-black cursor-pointer duration-300 nav-link"
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
            className="flex items-center gap-1 font-bold hover:text-textBlue text-black cursor-pointer duration-300 nav-link"
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
              className="flex items-center gap-1 font-bold hover:text-textBlue text-black cursor-pointer duration-300 nav-link"
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
    </div>
  );
};

export default Navbar;
