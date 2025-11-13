import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { appp } from './firebaseInit'; 

function SingIn() {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const auth = getAuth(appp)

    // Google & Facebook Provider
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    // 🔹 Email/Password diye SignIn
    const handelSinInButton = (e) => {
        e.preventDefault()
        setLoading(true)

        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user)
                alert("✅ Login Successful!");
                navigate("/")
            })
            .catch((error) => {
                console.error(error.message);
                alert("❌ Wrong email or password!");
            })
            .finally(() => setLoading(false));
    }

    // 🔹 Google diye SignIn
    const handelGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user)
                alert("✅ Google Login Successful!");
                navigate("/")
            })
            .catch((error) => {
                console.error(error.message);
                alert("❌ Google Login Failed!");
            });
    }

    // 🔹 Facebook diye SignIn
    const handelFacebookLogin = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                console.log(result.user)
                alert("✅ Facebook Login Successful!");
                navigate("/")
            })
            .catch((error) => {
                console.error(error.message);
                alert("❌ Facebook Login Failed!");
            });
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-900 pt-10'>
            <div className='bg-cyan-800 p-6 rounded-lg shadow-lg text-white w-[350px]'>
                <h2 className='text-center font-bold text-2xl mb-4'>Sign In</h2>

                <form onSubmit={handelSinInButton}>
                    <input
                        className='w-full bg-white text-black p-2 rounded mb-3'
                        type="email"
                        name="email"
                        placeholder='Your Email'
                        required
                    />
                    <input
                        className='w-full bg-white text-black p-2 rounded mb-3'
                        type="password"
                        name="password"
                        placeholder='Password'
                        required
                    />

                    <div className='text-end mb-3'>
                        <Link to="" className='text-cyan-300 hover:underline'>Forgot Password?</Link>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className='w-full bg-cyan-500 hover:bg-cyan-600 p-2 rounded cursor-pointer font-semibold disabled:bg-cyan-700'
                    >
                        {loading ? "Signing In..." : "Sign In"}
                    </button>

                    <div className='flex items-center justify-center gap-2 my-3'>
                        <hr className='border-gray-400 w-full' />
                        <span>or</span>
                        <hr className='border-gray-400 w-full' />
                    </div>

                    {/* 🔹 Social Login Buttons */}
                    <div className='flex flex-col gap-3'>
                        <button
                            type="button"
                            onClick={handelGoogleLogin}
                            className='bg-white text-black p-2 rounded flex items-center justify-center gap-2 hover:bg-gray-200'
                        >
                            <FaGoogle /> Login with Google
                        </button>

                        <button
                            type="button"
                            onClick={handelFacebookLogin}
                            className='bg-blue-500 p-2 rounded flex items-center justify-center gap-2 hover:bg-blue-600'
                        >
                            <FaFacebook /> Login with Facebook
                        </button>
                    </div>

                    <div className='mt-4 text-center'>
                        Don't have an account? <Link to='/register' className='text-cyan-300 hover:underline'>Register</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SingIn
