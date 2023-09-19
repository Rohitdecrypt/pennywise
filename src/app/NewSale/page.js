"use client"
import React from 'react'
import NewCart from '../Components/newSaleComponents/NewCart'
import withPageLayout from '../hoc/withPageLayout'

const NewSale = () => {
  return (
    <div>
        <NewCart/>
    </div>
  )
}
export default withPageLayout(NewSale)
