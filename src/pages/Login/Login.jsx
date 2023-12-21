import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
// import loginPng from "../../assets/images/login.png";
import SectionTitle from "../../components/SectionTitle";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password).then((res) => {
      const user = res.user;
      console.log(user);
      Swal.fire({
        title: "Success!",
        text: "Successfully logged in!",
        icon: "success",
        confirmButtonText: "Done",
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="max-w-contentContainer h-screen mx-auto py-10 mdl:py-10 flex flex-col justify-center items-center gap-4 lgl:gap-8 mdl:gap-10 xl:gap-4 text-center">
      <SectionTitle title={"Login Now"}></SectionTitle>
      <span>
        <FaSignInAlt className="text-2xl -mt-6"></FaSignInAlt>
      </span>
      <div className="md:px-24 flex-col-reverse lg:flex-row-reverse justify-center items-center">
        <div className="text-center  lg:text-left ">
          {/* <img src={loginPng} className="lg:w-1/6 mx-auto" alt="" /> */}
        </div>
        <div className="card  border-4 rounded-md border-black shadow-xl bg-white">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="w-full px-3 py-2 border-4 rounded-md border-textBlue focus:outline-gray-400 text-gray-400"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="w-full px-3 py-2 border-4 rounded-md border-textBlue focus:outline-gray-400 text-gray-400"
                required
              />
            </div>

            <label className="label">
              <p>
                New to this?
                <Link
                  to="/signUp"
                  className="ms-2 text-blue-700 text-lg label-text-alt link link-hover"
                >
                  Sign up
                </Link>
              </p>
            </label>

            <div className="form-control mt-6">
              <input
                className="btn btn-primary text-white bg-textBlue hover:bg-gray-400 hover:text-black hover:border-transparent"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
