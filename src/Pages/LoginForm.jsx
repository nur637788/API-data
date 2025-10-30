import React, { useState } from 'react'

function LoginForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [form, setForm] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        checkbox: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
    // Register submit
    const handleRegister = (e) => {
        e.preventDefault();

        if (!form.name.trim() || !form.username.trim() || !form.email.trim() || !form.password.trim() || !form.checkbox) {
            return;
        }
        localStorage.setItem("user", JSON.stringify(form));
        console.log('✅ Register Submitted:', form);
        alert('✅ Register submitted successfully!');
        setForm({ name: '', username: '', email: '', password: '', checkbox: false });
        setIsLogin(true);
    };

    // Login submit
    const hendelLogin = (e) => {
        e.preventDefault();

        const savedUser = JSON.parse(localStorage.getItem("user"));

        if (
            savedUser &&
            savedUser.email === form.email &&
            savedUser.password === form.password
        ) {
            console.log('✅ Login Submitted:', form);
            alert("🎉 Login Successful!");
        } else {
            alert("❌ Invalid email or password");
        }
    };

    return (
        <div className='min-h-screen '>
            <div className="p-6 mt-20 my-5  max-w-md mx-auto bg-white shadow-lg rounded-xl">
                <h2 className="text-2xl font-bold text-center mb-4">
                    {isLogin ? " Login Form" : "Register Form"}
                </h2>

                {!isLogin ? (
                    <form onSubmit={handleRegister}>
                        <label>Full Name:</label>
                        <input
                            className="border rounded w-full p-2 mb-2"
                            type="text"
                            name="name"
                            value={form.name}
                            placeholder="Enter your name" required
                            onChange={handleChange} />

                        <label>User Name:</label>
                        <input
                            className="border rounded w-full p-2 mb-2"
                            type="text"
                            name="username"
                            value={form.username}
                            placeholder="@username" required
                            onChange={handleChange} />

                        <label>Email:</label>
                        <input
                            className="border rounded w-full p-2 mb-2"
                            type="email"
                            name="email"
                            value={form.email}
                            placeholder="Enter your email" required
                            onChange={handleChange}
                        />

                        <label>Password:</label>
                        <input
                            className="border rounded w-full p-2 mb-2"
                            type="password"
                            name="password"
                            value={form.password}
                            placeholder="Enter your password" required
                            onChange={handleChange}
                        />

                        <input
                            type="checkbox"
                            name="checkbox"
                            checked={form.checkbox} required
                            onChange={(e) => setForm({ ...form, checkbox: e.target.checked })}
                        />
                        <label className="ml-2">Accept Terms & Privacy</label>


                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded w-full mt-3">
                            Register
                        </button>

                        <p className="mt-3 text-center">
                            Already have an account?{" "}
                            <span
                                onClick={() => setIsLogin(true)}
                                className="text-blue-500 cursor-pointer"
                            >
                                Login
                            </span>
                        </p>
                    </form>
                ) : (
                    <form onSubmit={hendelLogin}>
                        <label>Email:</label>
                        <input
                            className="border rounded w-full p-2 mb-2"
                            type="email"
                            name="email"
                            value={form.email}
                            placeholder="Enter your email"
                            onChange={handleChange}
                        />

                        <label>Password:</label>
                        <input
                            className="border rounded w-full p-2 mb-2"
                            type="password"
                            name="password"
                            value={form.password}
                            placeholder="Enter your password"
                            onChange={handleChange}
                        />

                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-3"
                        >
                            Login
                        </button>

                        <p className="mt-3 text-center">
                            Don’t have an account?{" "}
                            <span
                                onClick={() => setIsLogin(false)}
                                className="text-green-500 cursor-pointer"
                            >
                                Register
                            </span>
                        </p>
                    </form>
                )}
            </div>
        </div>


    );
}

export default LoginForm;