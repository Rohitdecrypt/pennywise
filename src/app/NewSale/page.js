"use client"
import React from 'react'
import WithPageLayout from '../hoc/WithPageLayout'

import Newsearchbar from '../Components/newSaleComponents/NewSaleCenter'
import NewCart from '../Components/newSaleComponents/NewCart'

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
export default WithPageLayout(NewSale);
