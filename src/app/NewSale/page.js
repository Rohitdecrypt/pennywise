"use client"
import React from 'react'
import NewCart from '../Components/newSaleComponents/NewCart'
import Newsearchbar from '../Components/newSaleComponents/NewSaleCenter'

const NewSale = () => {
  return (
    <div className='flex w-full'>
        <div className='p-2 bg-[#fff] w-full'>

        <Newsearchbar/>
        </div>
        <NewCart/>
    </div>
  )
}
export default NewSale
