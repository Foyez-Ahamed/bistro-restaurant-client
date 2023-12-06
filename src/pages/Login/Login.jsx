import { FaEye, FaEyeSlash } from "react-icons/fa";
import signUp from "../../assets/others/authentication2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {

  const [showPassIcon, setShowPassIcon] = useState(false);
  // const [disabled, setDisabled] = useState(true);
  const {userLogin} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';


  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
    .then(() => {
       toast.success('Successfully login');
       e.target.reset();
       navigate(from, {replace:true});
    })
    .then();

  }

  // google login //
  // const handleGoogleLogin = () => {
  //   googleLogin()
  //   .then( () => {
  //     toast.success('Successfully login');
  //     navigate(from, {replace:true});
  //   })
  //   .then();
  // }
  // google login //

  // const handleCaptcha = (e) =>{

  //    const value =e.target.value;

  //    if(validateCaptcha(value)){
  //       setDisabled(false)
  //    } else{
  //       setDisabled(true)
  //    }
     
  // }
  
  // useEffect(() => {
  //   loadCaptchaEnginge(6); 
  // },[])  

  return (
   <>
   <Helmet>
        <title>Boss Cafe | SignIn</title>
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
                <h1 className="text-center font-medium text-3xl text-[#403F3F] mb-6">
                  Sign In
                </h1>
              </div>

              <form onSubmit={handleLogin}>
                <div className="relative">
                 <div>
                 <label htmlFor="email">Email address</label> <br />
                  <input
                    type="email"
                    placeholder="enter your email..."
                    name="email"
                    required
                    className=" mt-4 mb-4 input  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                 
                 </div>
                 
                  <div>
                  <label htmlFor="password">Password</label> <br />
                  <input
                    type={showPassIcon ? 'text' : 'password'}
                    placeholder="enter your password"
                    required
                    name="password"
                    className="mt-4 input  w-full md:w-[390px] lg:w-[390px]"
                  />
                  </div>
{/* 
                 <div className="mt-4">
                 <label htmlFor="email"><LoadCanvasTemplate /></label>
                  <input
                    onBlur={handleCaptcha}
                    type="text"
                    placeholder="Type here"
                    name="captcha"
                    className="mt-4 input  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}

                 </div> */}
                 
                  <span
                    onClick={() => setShowPassIcon(!showPassIcon)}
                    className="cursor-pointer absolute right-[10px] top-[158px]"
                  >
                    {showPassIcon ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                  <input
                    type="submit"
                    value="Sign In"
                    disabled={false}
                    className=" btn w-full md:w-[390px] lg:w-[390px] mt-5 font-bold bg-[#D1A054B3] text-white hover:bg-gray-600"
                  />
                </div>
              </form>

              <div className="mt-5 text-center">
                <p className="text-[#D1A054]">
                  {" "}
                  New here? Create a New Account{" "}
                  <Link
                    to="/signUp"
                    className="text-bold text-blue-500 text-md uppercase underline"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>

              <div className="mt-8 text-center">
                <h1 className="font-bold"> Or Sign In with </h1>

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

export default Login;
