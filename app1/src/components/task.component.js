const Task =(props) => {
    const {id,title,description,status,changeStatus}=props

    const Backgroundcolors={
        OPEN:'Silver',//
        IN_PROGRESS:'LightBlue',
        DONE:'LightSteelBlue'
    }

    const Fontcolors={
        OPEN:'black',
        IN_PROGRESS:'black',
        DONE:'black'
    }


    const getButtonTitle=()=>{
        if(status==='OPEN'){
            return'In progress'
        }else if(status==='IN_PROGRESS'){
            return 'Done'
        }
    }
    
    const onButtonClick =() =>{
        if(status==='OPEN'){
            changeStatus(id,'IN_PROGRESS')
        }else if(status==='IN_PROGRESS'){
            changeStatus(id,'DONE')
        }
    }

    return(
            
    <div 
    className="card" 
    style={{
        backgroundColor: Backgroundcolors[status],
        color:Fontcolors[status],
        width:'100%',
        display : 'inline-block',
        margin: '10px',
        height : '150px',
    }}
    >


    <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    {status!=='DONE' && (
    <button onClick={onButtonClick}  className="btn btn-success">{getButtonTitle()}</button>
    )}
    </div>
    </div>
    )
}

export default Task