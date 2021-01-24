import React , {useEffect , useState} from 'react'
import axios from 'axios'
const HTTP = () => {
    const [posts , setPosts] = useState([])
   useEffect(() => {
     axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
        console.log(response.data)
        setPosts(response.data)
     }).catch(err=>{
         console.log(err)
     })
   }, [posts]) 
    return (
        <div>
         {
            
            posts.map((post)=> <div key={post.id}>{post.id} {post.title} {post.body}</div>)
           
         }   
        </div>
    )
}

export default HTTP
