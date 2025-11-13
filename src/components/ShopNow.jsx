import React from "react";

const ShopNow = () => {

    const handelSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="p-10 text-white flex flex-col items-center justify-center min-h-screen">
            <form onSubmit={handelSubmit} className="space-y-4 max-w-md m-auto bg-gray-200 p-5 rounded">
                <h1 className="text-2xl font-bold pb-4 text-center text-black">🧾 Checkout Form</h1>
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700"
                />
                <input
                    type="text"
                    placeholder="Address"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700"
                />
                <button
                    type="submit"
                    className="w-full bg-pink-600 py-2 rounded-lg mt-4"
                >
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default ShopNow;
