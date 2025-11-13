import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaFacebook, FaGoogle } from "react-icons/fa";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signOut
} from "firebase/auth";
import { appp } from './firebaseInit';

function Register() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const auth = getAuth(appp);

    // ✅ Email or password diye Register
    const handelRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUserInfo(result.user);
                alert("✅ Account Created Successfully!");
                e.target.reset();
                navigate("/singIn");
            })
            .catch((err) => {
                console.error(err);
                alert("❌ Something went wrong: " + err.message);
            });
    };

    //  Google diye Login
    const handelButtonGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUserInfo(result.user);
                alert("✅ Logged in with Google!");
                navigate("/singIn");
            })
            .catch((err) => {
                console.error(err);
                alert("❌ Google Login Failed: " + err.message);
            });
    };

    //  Facebook diye Login
    const handelButtonFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                setUserInfo(result.user);
                alert("✅ Logged in with Facebook!");
                navigate("/singIn");
            })
            .catch((err) => {
                console.error(err);
                alert("❌ Facebook Login Failed: " + err.message);
            });
    };

    // ✅ Logout Button
    const handelLogoutButton = () => {
        signOut(auth)
            .then(() => {
                setUserInfo(null);
                alert("👋 Logged out successfully!");
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className='pt-10 my-10 min-h-screen text-white'>

            {/* ✅ User Info Card */}
            {userInfo && (
                <div className='bg-amber-50 text-black p-6 rounded w-fit m-auto mb-6 shadow-lg'>
                    {userInfo.photoURL && (
                        <img
                            className='h-32 w-32 rounded-full m-auto mb-3 object-cover'
                            src={userInfo.photoURL}
                            alt={userInfo.displayName || "User"}
                        />
                    )}
                    <h2 className='text-center font-bold text-lg'>Name: {userInfo.displayName || "N/A"}</h2>
                    <p>Email: {userInfo.email}</p>
                    <p>ProviderId: {userInfo.providerId}</p>
                    <p>UID: {userInfo.uid}</p>
                    <p>Email Verified: {userInfo.emailVerified ? "✅ Yes" : "❌ No"}</p>

                    <button
                        onClick={handelLogoutButton}
                        className='mt-3 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-all'
                    >
                        Logout
                    </button>
                </div>
            )}

            {/* ✅ Register Form */}
            <div className='py-5 px-6 bg-cyan-800 rounded-lg shadow-lg w-fit m-auto'>
                <h2 className='text-center font-black text-2xl py-2'>Register Page</h2>

                <form onSubmit={handelRegister}>
                    <input className='block bg-white p-2 rounded mb-3 w-80 text-black' type="text" name="name" required placeholder='Your Full Name' />
                    <input className='block bg-white p-2 rounded mb-3 w-80 text-black' type="email" name="email" required placeholder='Your Email' />
                    <input className='block bg-white p-2 rounded mb-3 w-80 text-black' type="password" name="password" required placeholder='Password' />
                    <input className='block bg-white p-2 rounded mb-3 w-80 text-black' type="password" name="rePassword" required placeholder='Re-Password' />

                    <div className='mt-2 text-sm mb-3'>
                        <input type="checkbox" id='show-pass' required />
                        <label htmlFor="show-pass" className='ml-2'>
                            I agree to <Link to="/tramandcondition" className='text-cyan-300 underline'>Terms & Conditions</Link>
                        </label>
                    </div>

                    <button type='submit' className='bg-cyan-500 hover:bg-cyan-600 p-2 rounded w-full cursor-pointer font-semibold'>
                        Register
                    </button>
                </form>

                <div className='flex items-center justify-center gap-2 my-3'>
                    <hr className='border-gray-400 w-full' />
                    <span>or</span>
                    <hr className='border-gray-400 w-full' />
                </div>

                {/* ✅ Social Login Buttons */}
                <div className='flex flex-col gap-3'>
                    <button onClick={handelButtonGoogle} className='bg-white text-black px-3 py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-200'>
                        <FaGoogle /> Login with Google
                    </button>
                    <button onClick={handelButtonFacebook} className='bg-blue-600 px-3 py-2 rounded flex items-center justify-center gap-2 hover:bg-blue-700'>
                        <FaFacebook /> Login with Facebook
                    </button>
                </div>

                <div className='mt-4 text-center'>
                    Already have an account? <Link to='/singin' className='text-cyan-300 hover:underline'>Sign In</Link>
                </div>
            </div>
        </div>
    )
}

export default Register
