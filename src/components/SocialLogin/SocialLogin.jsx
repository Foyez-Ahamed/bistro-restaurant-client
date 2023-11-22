import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {

    const axiosPublic = useAxiosPublic();
    const {googleLogin} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    
    const handleGoogleLogin = () => {
        
        googleLogin()
        .then(result => {

            const userInfo = {

                name : result.user?.displayName,
                email : result.user?.email,
                image: result.user?.photoURL

            }

            axiosPublic.post('/api/v1/createUser', userInfo)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    console.log('user added to the database');
                    toast.success('Successfully sign up');
                    navigate(from, {replace:true});
                }
            })

        })
        .then();

    }

  return (
    <div>
      <div className="flex items-center justify-center gap-6 mt-6">
        <button>
          {" "}
          <FaFacebook className="text-xl text-blue-700"></FaFacebook>{" "}
        </button>
        <button>
          {" "}
          <FaLinkedin className="text-xl text-blue-700"></FaLinkedin>{" "}
        </button>
        <button onClick={handleGoogleLogin}>
          {" "}
          <FcGoogle className="text-xl"></FcGoogle>{" "}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
