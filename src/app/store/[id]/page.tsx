import React from 'react'

function page({params}:any) {
    const {id} = params;
  return (
    <div>
        <h1>{id}</h1>
        <h1>Book Details page</h1>
    </div>
  )
}

export default page