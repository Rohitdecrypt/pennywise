import React from 'react'
import cart from '../../../../assets/CartUser.jpg'
import cross from "../../../../assets/cross.png"
import Image from 'next/image'
const Cart = () => {
    return (
        <>

            <div className='w-[600px] bg-[#FFFFFF] h-screen shadow-xl'>
                <div className='flex flex-col  justify-start h-full px-5 py-6'>

                    <div className='flex flex-col justify-between h-full'>
                        <div>
                            <div className='flex justify-between w-full  items-start'>
                                <div className='flex flex-col items-center justify-center'>
                                    <Image src={cart} className='w-auto' alt='image' />
                                    <p className='text-[#000000] font-bold mt-2'>Cart</p>
                                </div>
                                <div className='flex'>
                                    <Image src={cross} className='w-auto' />
                                </div>
                            </div>

                            <h1 className='font-bold text-[20px] text-[#000000] pb-2 pt-2'>CART (4)</h1>

                            <div className='w-full h-[101px] border-2 border-black rounded-md p-4 mb-4'>
                                <p>#0123456789</p>
                                <p>Product Name Here</p>
                                <div className='flex justify-between'>
                                    <p>$000.00</p>
                                    <p>1</p>
                                </div>
                            </div>

                            <div className='w-full h-[101px] border-2 border-black rounded-md p-4 mb-4'>
                                <p>#0123456789</p>
                                <p>Product Name Here</p>
                                <div className='flex justify-between'>
                                    <p>$000.00</p>
                                    <p>1</p>
                                </div>
                            </div>

                            <div className='w-full h-[101px] border-2 border-black rounded-md p-4 mb-4'>
                                <p>#0123456789</p>
                                <p>Product Name Here</p>
                                <div className='flex justify-between'>
                                    <p>$000.00</p>
                                    <p>1</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="border-dashed border-2 border-black"></div>
                            <div className='flex justify-between mt-10 mb-5 flex-wrap'>
                                <button className='py-[10px] px-[44px] bg-[#ffffff] text-[#000000] border-2 border-[#000000] rounded-md'>Cancel</button>
                                <button className='py-[10px] px-[39px] bg-black text-[#ffff] rounded-md'>Complete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart