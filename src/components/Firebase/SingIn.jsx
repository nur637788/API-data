import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

function SingIn() {
    return (
        <div className='py-3 px-3 bg-cyan-800 p-5 w-fit m-auto my-15 rounded text-white'>
            <h2 className='text-center font-black text-xl py-2 text-white'>SingIn Page</h2>
            <form action="">
                <input className='flex bg-white p-2 rounded m-auto mb-3 w-80 text-black' type="email" name="email" placeholder='Your Email' />
                <input className='flex bg-white p-2 rounded m-auto w-80 text-black' type="password" name="rePassword" placeholder='Password' />

                <div className='mt-2 text-end'>
                    <Link to="" className='text-cyan-400'>Forgote Password</Link>
                </div>

                <input className='flex bg-cyan-500 p-2 rounded m-auto my-3 w-full' type="button" value="SingIn" />

                <div className='flex items-center justify-center gap-2 pb-3'>
                    <hr className='border border-gray-300 w-full' />
                    <span className='text-white'>or</span>
                    <hr className='border border-gray-300 w-full' />
                </div>
                <div className=' flex flex-col gap-3 items-center'>
                    <button className='bg-amber-200 px-2 py-1 rounded w-50 text-black flex items-center gap-2'> <FaGoogle /><span> Login With Google</span></button>
                    <button className='bg-amber-200 px-2 py-1 rounded w-50 text-black flex items-center gap-2'><FaFacebook /><span> Login With Facebook</span></button>
                    <button className='bg-amber-200 px-2 py-1 rounded w-50 text-black flex items-center gap-2'><FaGithub /><span> Login With GitHub</span></button>
                </div>
                <div className='mt-3 text-center'>Don't have an account? <Link to='/register' className='text-cyan-400'>Register </Link></div>
            </form>
        </div>
    )
}

export default SingIn
