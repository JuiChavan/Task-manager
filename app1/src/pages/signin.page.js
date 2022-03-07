import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signin } from "../services/user.service"

const SigninPage =(props) =>{
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')


    const navigate=useNavigate()

    const onSignin= async() => {
        if(username.length=== 0){
            alert('please enter username')
        }else if(password.length===0){
            alert('please enter password')
        }else{
            const result=await signin(username,password)
            console.log(result)
            if(result){
                //alert('success')
                const {token}=result

                //sessionStorage-temporary...
                sessionStorage['token']= token
                sessionStorage['username']=username
                //localstorage-permanent...

                navigate('/task-list')
            } else{
                alert('invalid username or password')
            }
        }
    }

    return (
        <div > 
            <h1 className="header">Signin</h1>

            <div className="form">
           
            <div className="mb-3">
                <label className="form-label">Username</label>
                <input 
                onChange={(e)=>{
                    setUsername(e.target.value)
                }}
                type="text" className="form-control"/>
                </div>

                <div className="mb-3">   
                <label className="form-label">Password</label>
                <input
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                type="text" className="form-control"/>
                </div>

                <div className="mb-3">
                <button onClick={onSignin}  className="btn btn-success">Signin</button>
                <div>Dont have an account ? Signup <Link to="/signup">here</Link></div>
                </div>
        
            </div>
            
        </div>
    )
}

export default SigninPage