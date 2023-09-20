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
<div className='h-[800px] overflow-y-scroll p-2 pb-0 relative'>

                            <div className='w-full h-[101px] border-2 border-black rounded-xl p-4 mb-4 text-[black]'>
                                <p>#0123456789</p>
                                <p className='font-semibold'>Product Name Here</p>
                                <div className='flex justify-between'>
                                    <p>$000.00</p>
                                    <p>1</p>
                                </div>
                            </div>
                          
                            
                        <div className='sticky z-10 top-[100%] bg-[#fff] '>
                            <div className="border-dashed border-2 border-black"></div>
                            <div className='flex justify-between mt-10 mb-5 flex-wrap'>
                                <button className='py-[10px] px-[44px] bg-[#ffffff] text-[#000000] border-2 border-[#000000] rounded-md'>Cancel</button>
                                <button className='py-[10px] px-[39px] bg-black text-[#ffff] rounded-md'>Complete</button>
                            </div>
                        </div>
</div>

                          
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart