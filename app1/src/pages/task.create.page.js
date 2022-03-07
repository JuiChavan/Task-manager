import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { createTasks } from "../services/task.service"


const CreateTaskPage =(props) =>{
    const[title,setTitle]=useState('')
    const[description,setDescription]=useState('')


    const navigate=useNavigate()

    const onCreateTask= async() => {
        if(title.length=== 0){
            alert('please enter title')
        }else if(description.length===0){
            alert('please enter description')
        }else{
            const result=await createTasks(title,description)
            console.log(result)
            if(result){
                //rediect to task list
                navigate('/task-list')
            } else{
                alert('invalid username or password')
            }
        }
    }

    return (
        <div > 
            <h1 className="header">Create Task</h1>

            <div className="form">
           
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input 
                onChange={(e)=>{
                    setTitle(e.target.value)
                }}
                type="text" className="form-control"/>
                </div>

                <div className="mb-3">   
                <label className="form-label">Description</label>
                <textarea
                onChange={(e)=>{
                    setDescription(e.target.value)
                }}
                //rows={6}
                type="text" 
                className="form-control"
                ></textarea>
                </div>

                <div className="mb-3">
                    <button  onClick={onCreateTask} className="btn btn-success">Save</button>

                  
                    <Link
                    to="/task-list"
                    state={{marginLeft:'10px'}}
                    className ="btn btn-danger">
                        Cancel
                    </Link>


                </div>

            </div>
            
        </div>
    )
}

export default CreateTaskPage