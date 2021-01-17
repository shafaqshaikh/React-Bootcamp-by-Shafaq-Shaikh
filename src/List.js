import React from 'react'

const List = () => {

    const fruits = ['mango' , 'apple' , 'banana' , 'chikoo' , 'orange' , 'pineaaple' , 'guavava']
    return (
        <div>
           {
               fruits.map((fruit)=> <h1>{fruit}</h1>)
           } 
        </div>
    )
}

export default List
