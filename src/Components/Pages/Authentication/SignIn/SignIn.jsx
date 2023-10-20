import { useContext, useState } from 'react';
import brandLogo from '../../../../assets/logo2.jpg';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const SignIn = () => {

    const [showPass, setShowPass] = useState(false);
    const {signIn, createAndLogInWithGoogle} = useContext(AuthContext);
    const loaction = useLocation();
    const navigate = useNavigate()

    const handelSignInUserWithGoogle = () =>{
        createAndLogInWithGoogle()
        .then(result =>{
            if(result){
                Swal.fire({
                    icon: 'success',
                    title: 'User Successfully login',
                    showConfirmButton: false,
                    timer: 1000
                  })
                  navigate(loaction?.state ? loaction.state : '/')
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

    const handelSignInUser = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result =>{
            if(result){
                Swal.fire({
                    icon: 'success',
                    title: 'User Successfully login',
                    showConfirmButton: false,
                    timer: 1000
                  })
                  navigate(loaction?.state ? loaction.state : '/')
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
    
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col-reverse lg:flex-row justify-center w-full lg:bg-slate-100 rounded">
                <div className="lg:w-[50%] mb-10 lg:mb-0 lg:py-20">
                    <div>
                        <div className='flex items-center gap-2 ml-10'>
                            <img className='w-12' src={brandLogo} alt="" />
                            <h2 className='text-2xl font-bold'><span className='text-sky-400'>Tech</span> Shop</h2>
                        </div>
                        <h1 className='text-center text-2xl lg:text-4xl font-bold mt-12'>Sign In Your Account</h1>

                        <form onSubmit={handelSignInUser} className='mt-10 lg:mt-20'>
                            <input className='block border-b-[2px] border-gray-400 w-[70%] mx-auto px-4 py-2 outline-none text-lg lg:bg-slate-100' type="email" name="email" placeholder='Email' />
                            <div className='relative my-10'>
                                <input
                                className='block border-b-[2px] border-gray-400 w-[70%] mx-auto px-4 py-2 outline-none text-lg lg:bg-slate-100'
                                type={showPass? "text" : "password"}
                                name="password"
                                placeholder='Password' />
                                {
                                    showPass ?
                                    <AiOutlineEyeInvisible onClick={() => setShowPass(!showPass)} className='absolute right-16 lg:right-32 top-3 text-2xl' />
                                    :
                                    <AiOutlineEye onClick={() => setShowPass(!showPass)} className='absolute right-16 md:right-32 top-3 text-2xl' />
                                }
                            </div>

                            <div className='w-full flex justify-center mt-16'>
                            <input className='w-[30%] py-3 rounded-lg border text-center text-xl font-semibold cursor-pointer text-white bg-gradient-to-r from-cyan-500 to-blue-500' type="submit" value="Sign In" />
                            </div>
                        </form>

                        <div className='my-12 relative'>
                            <hr className='w-[60%] mx-auto' />
                            <span className='text-lg font-medium absolute left-[45%] lg:left-[48%] -top-[14px] lg:bg-slate-100 px-3'>OR</span>
                        </div>

                        <div>
                            <h1 className='text-center text-lg text-gray-600 mb-10'>Sign In your Account using social networks</h1>

                            <div>
                                <button onClick={handelSignInUserWithGoogle} className='flex items-center justify-center gap-4 border-2 border-black lg:w-[50%] mx-auto px-5 lg:px-0 py-4 rounded-md'>
                                    <FcGoogle className='text-3xl' />
                                    <h2 className='text-xl font-semibold'>SignIn with Google</h2>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[50%] bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center mb-16 lg:mb-0 lg:rounded-r mt-96 lg:mt-0 py-20 lg:py-0'>
                    <div className='text-center text-white'>
                        <h1 className='text-6xl font-bold'>New Here?</h1>
                        <p className='my-8 text-xl'>Sign Up and discover the latest and greatest <br /> in tech products and services.</p>

                        <Link to='/signUp'>
                        <button className='px-16 py-3 rounded-full border text-center text-xl font-semibold cursor-pointer bg-white text-black'>
                            Sign Up
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;