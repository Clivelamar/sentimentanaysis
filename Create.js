import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Create = () => {
    const[title,setTitle]=useState('');
    const[body,setBody]=useState('');
    const[author,setAuthor]=useState('mario');
    const[isPending,setIsPending]=useState(false);
    const history=useHistory();

    const handleSubmit= (e)=>{
     
        e.preventDefault();
        const blog={title,body,author}
        
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)} )
            .then(()=>{
                console.log('New blog added');
                setIsPending(false);
                // history.go(-1);
                history.push('/');
            })

        }

    
    return ( 
        <div className="create">
            <h1>Log In</h1>
            <form className ='loginForm'onSubmit={handleSubmit}>
        
                <input placeholder ="Email"
                type="email"
                required
               
               
                >
                </input>


                <input placeholder ="Password"
                type="password"
                required
              
              
                >
                </input>
                <p id="forgotpassword"><a href="#"> Forgot Password?</a></p><br/>
               
                   
                
               {!isPending &&<button><b>SUBMIT</b></button>}

               <Link to={"/signup"}><p><a href='#'>New here? Sign Up Now </a></p></Link>

               {isPending &&<button disabled>Adding Blog...</button>} 

               
              

            </form>
        </div>
     );
    }
 
export default Create;