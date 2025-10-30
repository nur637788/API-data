import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // input change handle
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');
        setSuccess('');
    };

    // validation check function
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // submit handler
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.email) {
            setError('Email field is required!');
            return;
        }

        if (!validateEmail(form.email)) {
            setError('Please enter a valid email address!');
            return;
        }

        setSuccess('Thank you for subscribing!');
        setForm({ email: '' });
    };

    return (
        <footer className='bg-gray-300 px-10 md:px-20'>
            <div className='grid grid-cols-2 md:grid-cols-4  gap-5 justify-between items-center py-5'>
                {/* Company Logo */}
                <div className='space-y-1'>
                    <h3 className='text-2xl font-bold'>Company</h3>
                    <h4 className='font-black text-green-500'><span className='text-pink-700'>API</span> DATA</h4>
                    <img className='cursor-pointer w-15 h-15 rounded-full ' src="/images/icon.png" alt="Logo" />
                </div>

                {/* Social Link */}
                <div className='flex flex-col space-y-1'>
                    <h3 className='text-2xl font-bold'>Follow Us</h3>
                    <a className='hover:text-blue-300' href="">Facebook</a>
                    <a className='hover:text-blue-300' href="">Instagram</a>
                    <a className='hover:text-blue-300' href="">YouTube</a>
                </div>

                {/* Privacy policy Link Button*/}
                <div className='flex flex-col items-start space-y-1'>
                    <h3 className='text-2xl font-bold'>Useful Links</h3>
                    <button className='cursor-pointer hover:text-blue-300'>Shop</button>
                    <button onClick={() => navigate('/privacypolicy')} className='cursor-pointer hover:text-blue-300'>Privacy Policy</button>
                    <button onClick={() => navigate('/termcondition')} className='cursor-pointer hover:text-blue-300'>Terms & Condition</button>
                </div>

                {/* Subscription Button*/}
                <div className='flex flex-col items-start space-y-2 w-full max-w-sm'>
                    <h3 className='text-2xl font-bold'>Subscription</h3>
                    <form onSubmit={handleSubmit} className='w-full'>
                        <input
                            className={`border  rounded w-full px-2 py-1 mb-1 ${error ? 'border-red-500' : 'border-gray-700'
                                }`}
                            type='email'
                            name='email'
                            value={form.email}
                            placeholder='Enter your email'
                            onChange={handleChange}
                        />
                        {error && <p className='text-red-500 text-sm'>{error}</p>}
                        {success && <p className='text-green-600 text-sm'>{success}</p>}

                        <button
                            type='submit'
                            className='bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded mt-2 cursor-pointer'>
                            Subscribe
                        </button>
                    </form>
                </div>



            </div>
            <h3 className='text-center text-sm py-1 font-semibold pb-2'>&copy; Copyrigth API DATA. All Right Revers</h3>
        </footer>
    )
}

export default Footer;
