import React, { createContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { appp } from './firebaseInit';


export const Contaxt = createContext()
function Register() {
    const [userInfo, setUserInfo] = useState(null)
    const googleProvider = new GoogleAuthProvider();  // Google ar jonno...
    const auth = getAuth(appp)   // Firebase Config 

    // email or password diye login
    const handelRegister = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUserInfo(result.user)
                console.log(result.user)
                e.target.reset();
            })
            .catch((err) => {
                console.log("some error", err)
            });
    }

    // login with google
    const handelButtonGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUserInfo(result.user)
                console.log(result.user)
            })
            .catch(console.error);
    }

    return (
        <div className='pt-10'>

            {/* User Information */}
            <Contaxt.Provider value={userInfo}>
                {userInfo && (
                    <div className='bg-amber-50 p-10 rounded w-fit m-auto'>
                        <img className='h-full w-full rounded-full' src={userInfo.photoURL} alt={userInfo.displayName} />
                        <h2>Name: {userInfo.displayName}</h2>
                        <p>Email: {userInfo.email}</p>
                        <p>ProviderId: {userInfo.providerId}</p>
                        <p>UserUID: {userInfo.uid}</p>
                        <p>emailVerified: {userInfo.emailVerified ? "Yes" : "No"}</p>
                    </div>
                )}
            </Contaxt.Provider>

            {/* Register Form */}
            <div className='py-3 px-3 bg-cyan-800 p-5 w-fit m-auto my-10 rounded text-white '>
                <h2 className='text-center font-black text-xl py-2 text-white'>Register Page</h2>
                <form onSubmit={handelRegister}>
                    <input className='flex bg-white p-2 rounded m-auto my-3 w-80 text-black' type="text" name="name" required placeholder='Your Full Name' />
                    <input className='flex bg-white p-2 rounded m-auto w-80 text-black' type="email" name="email" required placeholder='Your Email' />
                    <input className='flex bg-white p-2 rounded m-auto my-3 w-80 text-black' type="password" name="password" required placeholder='Password' />
                    <input className='flex bg-white p-2 rounded m-auto w-80 text-black' type="password" name="rePassword" required placeholder='Re-Password' />

                    <div className='mt-2 space-x-2'>
                        <input type="checkbox" id='show-pass' required />
                        <label htmlFor="show-pass">I'm Agrey <Link to="/tramandcondition" className='text-cyan-400'>Trms & Conditions</Link></label>
                    </div>

                    <button type='submit' className=' bg-cyan-500 p-2 rounded my-3 w-full '>Register</button>

                    <div className='flex items-center justify-center gap-2 pb-3'>
                        <hr className='border border-gray-300 w-full' />
                        <span className='text-white'>or</span>
                        <hr className='border border-gray-300 w-full' />
                    </div>
                    <div className=' flex flex-col gap-3 items-center'>
                        <button onClick={handelButtonGoogle} className='bg-amber-200 px-2 py-1 rounded w-55 text-black flex items-center gap-2'> <FaGoogle /><span> Login With Google</span></button>
                        <button className='bg-amber-200 px-2 py-1 rounded w-55 text-black flex items-center gap-2'><FaFacebook /><span> Login With Facebook</span></button>
                        <button className='bg-amber-200 px-2 py-1 rounded w-55 text-black flex items-center gap-2'><FaGithub /><span> Login With GitHub</span></button>
                    </div>
                    <div className='mt-3 text-center'>Already have an account? <Link to='/singIn' className='text-cyan-400'>SingIn </Link></div>
                </form>
            </div>
        </div>
    )
}

export default Register
