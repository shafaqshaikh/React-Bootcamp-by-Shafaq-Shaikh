import React , {useState} from 'react'

const Form = () => {
    const [firstName , setFirstName]=useState("")
    const [lastName , setLastName]=useState("")
    const [profession , setProfession]=useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(firstName , lastName , profession)

    }
    return (
        <div>
           <form onSubmit={handleSubmit}>
               <input type="text" placeholder="FirstName" onChange={(e)=>setFirstName(e.target.value)}/>
               <input type="text" placeholder="LastName" onChange={(e)=>setLastName(e.target.value)}/>
               <input type="text" placeholder="Profession" onChange={(e)=>setProfession(e.target.value)}/>
               <button>submit</button>
               </form> 
        </div>
    )
}

export default Form
