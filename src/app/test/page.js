import React from 'react'
import withPageLayout from '../hoc/withPageLayout'


function test() {
    console.log("test")
  return (
    <div>test</div>
  )
}

export default withPageLayout(test)