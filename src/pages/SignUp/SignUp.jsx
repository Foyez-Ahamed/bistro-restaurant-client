import { FaEye, FaEyeSlash } from "react-icons/fa";
import signUp from "../../assets/others/authentication2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebaseConfig/firebase.config";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
const auth = getAuth(app);

const SignUp = () => {

  const axiosPublic = useAxiosPublic();
  const [showPassIcon, setShowPassIcon] = useState(false);
  const {userSignUp} = useAuth();
  
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.form?.pathname || '/';


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

     userSignUp(data.email, data.password)
     .then(() => {
        updateProfile(auth.currentUser, {
            displayName: data.name,
            photoURL: data.photoUrl 
          })
          .then()
          .catch()

          // ...... //
          const userInfo = {
            name : data.name,
            email : data.email,
            image : data.photoUrl
          }

          axiosPublic.post('/api/v1/createUser', userInfo)
          .then(res => {
            if(res.data.insertedId){
              console.log('user added to the database');
              toast.success('Successfully sign up');
              reset();
              navigate(from, {replace:true});
            }
          })
          // ...... //
     })
     .then();
  };

  return (
    <>
    <Helmet>
        <title>Boss Cafe | SignUp</title>
    </Helmet>

    <div className=" mt-4 lg:mt-24">
      <section className="flex flex-col-reverse lg:flex-row justify-between gap-6">
        <div className="flex-1 justify-center items-center mt-16">
          <img src={signUp} alt="" />
        </div>

        <div className="flex-1">
          <div>
            <div className="shadow-xl p-8 w-full md:w-[450px] lg:w-[450px] rounded-xl dark:text-black bg-gray-100">
              <div>
                <h1 className="text-center font-medium text-3xl mb-6">
                  Sign Up
                </h1>
              </div>

              {/* form  */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="relative">
                  <div>
                    <label htmlFor="name">Name</label> <br />
                    <input
                      type="text"
                      placeholder="enter your name"
                      name="name"
                      {...register("name", { required: true })}
                      className=" mt-4 mb-4 input  w-full md:w-[390px] lg:w-[390px]"
                    />{" "}
                    {errors.name && (
                      <span className="text-red-500">
                        Name Field is required !
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="photo">Photo URL</label> <br />
                    <input
                      type="text"
                      placeholder="enter your photoUrl"
                      name="photoUrl"
                      {...register("photoUrl", { required: true })}
                      className=" mt-4 mb-4 input  w-full md:w-[390px] lg:w-[390px]"
                    />{" "}
                  </div>

                  <div>
                    <label htmlFor="email">Email address</label> <br />
                    <input
                      type="email"
                      placeholder="enter your email"
                      name="email"
                      {...register("email", { required: true })}
                      className=" mt-4 mb-4 input  w-full md:w-[390px] lg:w-[390px]"
                    />{" "}
                    {errors.email && (
                      <span className="text-red-500">
                        Email Field is required!
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="password">Password</label> <br />
                    <input
                      type={showPassIcon ? "text" : "password"}
                      placeholder="enter your password"
                      name="password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
                      })}
                      className="mt-4 input  w-full md:w-[390px] lg:w-[390px]"
                    />
                    {errors.password?.type === "required" && (
                      <p className="text-red-500">Password is required</p>
                    )}
                     {errors.password?.type === "minLength" && (
                      <p className="text-red-500">Password must be at least 6 character</p>
                    )}
                     {errors.password?.type === "pattern" && (
                      <p className="text-red-500">password must have at least one capital letter and special character!</p>
                    )}
                  </div>

                  <span
                    onClick={() => setShowPassIcon(!showPassIcon)}
                    className="cursor-pointer absolute right-[10px] top-[368px]"
                  >
                    {showPassIcon ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                  <input
                    type="submit"
                    value="Sign Up"
                    className=" btn w-full md:w-[390px] lg:w-[390px] mt-5 font-bold bg-[#D1A054B3] text-white hover:bg-gray-600"
                  />
                </div>
              </form>

              <div className="mt-5 text-center">
                <p className="text-[#D1A054]">
                  {" "}
                  Already registered? Go to log in{" "}
                  <Link
                    to="/login"
                    className="text-bold text-blue-500 text-md uppercase underline"
                  >
                    Sign In
                  </Link>
                </p>
              </div>

              <div className="mt-8 text-center">
                <h1 className="font-bold"> Or Sign up with </h1>


               <SocialLogin></SocialLogin>


              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    </>
  );
};

export default SignUp;
