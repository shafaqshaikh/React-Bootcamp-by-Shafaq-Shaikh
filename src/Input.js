//Input Handling


import React , {useState} from 'react'
const Input = () => {
    const [name , setName] = useState("")
    const change = (e)=>{
        setName(e.target.value)
    }
    return (
        <div>
           <input type="text" placeholder="Enter Your Name" onChange={change}/>
           <div>
               {name}
           </div>
        </div>
    )
}

export default Input
