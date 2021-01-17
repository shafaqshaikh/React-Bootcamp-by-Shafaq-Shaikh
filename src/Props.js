import React from 'react'

function Props( props) {
    return (
        <div>
            <h1>hello : {props.name}</h1>
            <p>{props.rollno}</p>
            {props.children}
        </div>
    )
}

export default Props
