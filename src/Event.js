import React from 'react'
let print
const Event = () => {
    const EventHandler = ()=>{
          console.log("button clicked")
    }
    return (
        <div>
            <button onClick={EventHandler}>click me</button>
           
        </div>
    )
}

export default Event
