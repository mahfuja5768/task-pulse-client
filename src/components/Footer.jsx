import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa6";
import logo from ".././assets/logo.png";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-[#ecd1d1] text-black">
      <aside>
        <img className="w-32" src={logo} alt="" />

        <nav className="">
          <header className="font-bold text-2xl  text-start md:text-center">
            Social links
          </header>
          <div className="flex justify-start md:items-center  md:justify-center gap-12 my-6">
            <a
              href="https://www.facebook.com/"
              className="hover:-translate-y-2 duration-300"
              target="blank"
            >
              <FaFacebookF className="text-xl "></FaFacebookF>
            </a>
            <a
              href="https://www.linkedin.com/"
              className="hover:-translate-y-2 duration-300"
              target="blank"
            >
              <FaLinkedin className="text-xl"></FaLinkedin>
            </a>
            <a
              href="https://www.twitter.com/"
              className="hover:-translate-y-2 duration-300"
              target="blank"
            >
              <FaTwitter className="text-xl"></FaTwitter>
            </a>
          </div>
        </nav>

        <p>Copyright © 2023 - All right reserved</p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Task Management Platform. All
          rights reserved.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
