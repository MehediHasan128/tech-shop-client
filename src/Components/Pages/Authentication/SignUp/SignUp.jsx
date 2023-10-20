import { useContext, useState } from "react";
import brandLogo from "../../../../assets/logo2.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const {createUser, createAndLogInWithGoogle, setDisplayName} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();


  const handelCreateUserWithGoogle = () =>{
    createAndLogInWithGoogle()
    .then(result =>{
        if(result){
            Swal.fire({
                icon: 'success',
                title: 'User Created Successfully',
                showConfirmButton: false,
                timer: 1000
              })
              navigate(location?.state ? location.state : '/')
        }
    })
    .catch(error =>{
      if(error){
        if(error){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.message}`
              })
        }
    }
    })
  }

  const handelCreateUser = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    setPasswordError('')

    if(password.length < 6){
        setPasswordError('Password Should be al least 6 characters or longer');
        return;
      }
      else if(!/[A-Z]/.test(password)){
        setPasswordError('Password should have at least one upper case character ');
        return;
      }
      else if(!/[!@#$%^&*]/.test(password)){
        setPasswordError('Password should have at least one special character')
      }

      else{
        createUser(email, password)
        .then(result =>{
          const user = result.user;
          console.log(user);
          setDisplayName(user, name)
            if(result){
                Swal.fire({
                    icon: 'success',
                    title: 'User Created Successfully',
                    showConfirmButton: false,
                    timer: 1000
                  })
                  navigate(location?.state ? location.state : '/')
            }
        })
        .catch(error =>{
          if(error){
            if(error){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`
                  })
            }
        }
        })
      }
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col-reverse lg:flex-row justify-center w-full lg:bg-slate-100 rounded gap-10 lg:gap-0 mb-10">
        <div className="w-full lg:w-[50%] flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 py-20 lg:py-0">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold">
              Already have an <br /> account?
            </h1>
            <p className="my-8 text-xl">
              Enjoy the latest and greatest in tech <br /> products and
              services.
            </p>

            <Link to="/signIn">
              <button className="px-16 py-3 rounded-full border text-center text-xl font-semibold cursor-pointer bg-white text-black">
                Sign In
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[50%] lg:py-20">
          <div>
            <div className="flex items-center gap-2 ml-10">
              <img className="w-12" src={brandLogo} alt="" />
              <h2 className="text-2xl font-bold">
                <span className="text-sky-400">Tech</span> Shop
              </h2>
            </div>
            <h1 className="text-center text-2xl lg:text-4xl font-bold mt-12">
              Sign Up Your Account
            </h1>

            <form onSubmit={handelCreateUser} className="mt-10 lg:mt-20">
              <input
                className="block border-b-[2px] border-gray-400 w-[70%] mx-auto px-4 py-2 outline-none text-lg lg:bg-slate-100 mb-10"
                type="text"
                name="name"
                placeholder="Enter your full name"
              />

              <input
                className="block border-b-[2px] border-gray-400 w-[70%] mx-auto px-4 py-2 outline-none text-lg lg:bg-slate-100"
                type="email"
                name="email"
                placeholder="Email"
              />
              <div className="relative my-10">
                <input
                  className="block border-b-[2px] border-gray-400 w-[70%] mx-auto px-4 py-2 outline-none text-lg lg:bg-slate-100"
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                />
                {showPass ? (
                  <AiOutlineEyeInvisible
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-16 lg:right-32 top-3 text-2xl"
                  />
                ) : (
                  <AiOutlineEye
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-16 md:right-32 top-3 text-2xl"
                  />
                )}
                <label className="absolute left-32 text-red-600 font-medium">
                    {passwordError}
                </label>
              </div>

              <div className="w-full flex justify-center mt-16">
                <input
                  className="w-[30%] py-3 rounded-lg border text-center text-xl font-semibold cursor-pointer text-white bg-gradient-to-r from-cyan-500 to-blue-500"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>

            <div className="my-12 relative">
              <hr className="w-[60%] mx-auto" />
              <span className="text-lg font-medium absolute left-[45%] lg:left-[48%] -top-[14px] lg:bg-slate-100 px-3">
                OR
              </span>
            </div>

            <div>
              <h1 className="text-center text-lg text-gray-600 mb-10">
                Sign In your Account using social networks
              </h1>

              <div>
                <button onClick={handelCreateUserWithGoogle} className="flex items-center justify-center gap-4 border-2 border-black lg:w-[50%] mx-auto px-5 lg:px-0 py-4 rounded-md">
                  <FcGoogle className="text-3xl" />
                  <h2 className="text-xl font-semibold">SignUp with Google</h2>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
