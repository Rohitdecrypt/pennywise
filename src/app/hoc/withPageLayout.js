"use client"
import React from 'react'
import Layout from "../page";


export const withPageLayout = (WrappedComponent) => {
  return (props) => (
    <Layout>
    <WrappedComponent {...props} />
  </Layout>
  )
}
export default withPageLayout;