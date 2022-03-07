import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signup } from "../services/user.service"

const SignupPage =(props) =>{
    //keep name password
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const navigate=useNavigate()

    const onSignup= async () => {
        //alert ('signup')
        //console.log(`email=${email}`)
        //console.log(`password=${password}`)

        if(username.length ===0){
            alert('Please enter username')
        }
        else if(password.length ===0){
            alert('Please enter password')
        }else{
        //MAKE SIGNUP API CALL
            const result = await signup(username,password)
            console.log(result)
            if(result){
                navigate('/signin')
            }
        }
    }


    return (
        <div > 
            <h1 className="header">Signup</h1>

            
            <div className="form">
           
            <div className="mb-3">
                <label className="form-label">Username</label>
                <input 
                onChange={(e)=>{
                   // console.log(e)
                   setUsername(e.target.value)
                }}
                type="username" className="form-control"/>
                </div>

                <div className="mb-3">   
                <label className="form-label">Password</label>
                <input 
                 onChange={(e)=>{
                    // console.log(e)
                    setPassword(e.target.value)
                 }}
                type="text" className="form-control"/>
                </div>

                <div className="mb-3">
                <button onClick={onSignup} className="btn btn-success">Signup</button>
                <div>
                    Already have an account ? Signin <Link to="/signin">here</Link>
                </div>
                
                
                </div>
        
            </div>


        </div>
    )
}

export default SignupPage