import React from 'react'

const Child = (props) => {
    return (
        <div>
            <button onClick={props.greetHandler}>greet parent</button>
        </div>
    )
}

export default Child
