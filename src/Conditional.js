import React , {useState} from 'react'

const Conditional = () => {
    let message
    const [isLoggedIn , setIsLoggedIn] = useState(false)

    // if(isLoggedIn){
       
    //      message = <h1>hello guest</h1>
      
    // }else{
       
    //         message = <h1>Login Please</h1>

      
    // }

    return (

      <div>
          {/* {
            isLoggedIn ? <h1>hello guest</h1> : <h1>Login please</h1>

          } */}

          {

            isLoggedIn  &&  <h1>hello guest</h1> 
          }
      </div>

    )
  
}

export default Conditional
