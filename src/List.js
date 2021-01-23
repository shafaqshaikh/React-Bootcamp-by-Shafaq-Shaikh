//List Rendering 
// styling and css in react
import React , {useState}  from 'react'
import './style.css'
// const fruits = ['apple' , 'banana' , 'kiwi' , 'mango' , 'watermelon']
const List = () => {
    const [persons , setPersons] = useState([
        {
            id : 1,
            name : 'shafaq',
            profession : 'sofware engineer'
        },
        {
            id : 2,
            name : 'arnab',
            profession : 'sofware developer'
        },
        {
            id : 3,
            name : 'mariyam',
            profession : 'laravel developer'
        },
        {
            id : 4,
            name : 'saqlain',
            profession : 'student'
        },
    ])

    return (
        <div>
         {
        persons.map((person)=>(
          
            // <p style={{color : 'red' , fontSize : 30}}>hello i am {person.name} and my profession is {person.profession}</p>
                      <p className="app" key={person.id} >hello i am {person.name} and my profession is {person.profession}</p>

        ))
         }
        </div>
    )
}

export default List
