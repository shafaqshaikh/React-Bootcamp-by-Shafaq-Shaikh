import React from 'react'
import Child from './Child'

const Parent = () => {
    const greetParent =()=>{
      console.log("hello parent")

    }
    return (
        <div>
        <Child greetHandler={greetParent}/>    
        </div>
    )
}

export default Parent
