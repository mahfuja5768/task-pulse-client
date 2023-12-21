import { FaGoogle } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../../api/auth";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      const result = await googleLogin();
      const saveUserInfo = await saveUser(result?.user);
      console.log(saveUserInfo);

      Swal.fire({
        title: "Success!",
        text: "Successfully user logged in!",
        icon: "success",
        confirmButtonText: "Done",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: `${error.message}`,
        icon: "error",
        confirmButtonText: "Done",
      });
    }
  };
  return (
    <div>
      <div className="border-2 pt-4 mx-auto">
        <button onClick={handleGoogleSignIn} className="flex justify-center w-12 h-12 border-textBlue p-2 items-center border-4 rounded-full  mb-4 mx-auto">
            <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
