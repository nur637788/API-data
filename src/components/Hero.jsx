import React from 'react'
import { useNavigate } from 'react-router-dom'

function Hero() {
    const navigate = useNavigate();
    return (
        <section>
            <div>
                <div
                    className="hero min-h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center text-center"
                    style={{
                        backgroundImage:
                            "url(https://png.pngtree.com/background/20240413/original/pngtree-boho-living-room-with-sun-a-3d-rendered-illustration-of-modern-picture-image_8475402.jpg)",
                    }}>
                    <div className="flex flex-col items-center justify-center text-black px-4">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5 text-2xl">
                            Elevate Your Home Decor with Our Premium Collection.
                        </p>
                        <button onClick={() => navigate('/contact')} className='bg-blue-800 hover:bg-blue-700 hover:scale-95 duration-300 cursor-pointer text-white px-4 py-2 rounded'>Contact us</button>
                    </div>
                </div>

                {/*Discount Card 1  */}
                <div className='py-10 grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="max-w-[100%] max-h-[100%]">
                        <div className='hero w-[100%] h-[100%] py-20 bg-no-repeat'
                            style={{ backgroundImage: "url( https://img.lovepik.com/bg/20240423/Exquisite-3D-Render-Minimalist-Living-Room-with-Stylish-Wooden-TV_7230155_wh1200.jpg )" }}>

                            <div className='px-8 space-y-4 text-white'>
                                <h6 className='font-bold text-green-400'>Up to 25% Discount</h6>
                                <h1 className='text-2xl font-medium'>Explore Our Luxurious Sofa
                                    <br /> Set Collection</h1>
                                <button className='px-4 py-1 text-white bg-[#092B42] rounded-md hover:bg-[#527A9A]  hover:scale-95 duration-300 cursor-pointer'>Shop Now</button>
                            </div>
                        </div>
                    </div>

                    {/*Discount Card 2  */}
                    <div className="max-w-[100%] max-h-[100%]">
                        <div className='hero w-[100%] h-[100%] py-20 '
                            style={{ backgroundImage: "url( https://img.freepik.com/premium-photo/modern-decoration-mock-up-interior-design-living-room-black-wall-texture-background_221619-1531.jpg )" }}>

                            <div className='px-8 space-y-4 text-white'>
                                <h6 className='font-bold text-green-400'>Up to 20% Discount</h6>
                                <h1 className='text-2xl font-medium'>Explore Our Luxurious Sofa
                                    <br /> Set Collection</h1>
                                <button className='px-4 py-1 text-black bg-gray-300 rounded-md hover:bg-gray-100  hover:scale-95 duration-300 cursor-pointer'>Shop Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero
