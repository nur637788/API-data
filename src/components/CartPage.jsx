import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../components/Redux/CartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    return (
        <div className="p-5 text-black mt-10">
            <h1 className="text-2xl font-bold mb-5 text-center">🛍️ Your Cart</h1>
            {cart.length === 0 ? (
                <p className="text-center">No items in cart.</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex gap-5 justify-between bg-gray-300 p-4 rounded-lg mb-3">
                            <div>
                                {item.title} - ${item.price}
                            </div>
                            <div className=" flex gap-5">
                                <Link to={`/products/${item.id}`}>
                                    <button
                                        className="bg-green-600 hover:bg-green-700 hover:scale-105 duration-300 px-4 py-2 rounded-lg cursor-pointer">
                                        More Info
                                    </button>
                                </Link>
                                <button
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                    className=" cursor-pointer">
                                    ❌
                                </button>

                            </div>
                        </div>
                    ))}

                    <div className="mt-5 flex justify-between items-center">
                        <div className="text-lg">
                            🧾 Total Products:{" "}
                            <span className="text-pink-400">{cart.length}</span>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={() => dispatch(clearCart())}
                                className="bg-red-800 hover:bg-red-700 hover:scale-95 duration-300 text-white px-5 py-2 rounded-lg cursor-pointer">
                                Clear Cart
                            </button>

                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
