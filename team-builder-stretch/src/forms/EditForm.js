import React,{useState} from "react";

const EditUserForm = props =>{
    const [user,setUser] = useState(props.currentUser)
    const handleInputChange = event => {
        const {name,value} = event.target

        setUser({...user,[name]:value})
    }
const handleSubmit = event =>{
    event.preventDefault()
    props.updateUser(user.id,user)
}
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input onChange={handleInputChange} type="text" name="name" id="name" value={user.name}/>
            <label htmlFor="username">Username</label>
            <input onChange={handleInputChange} type="text" name="username" id="username" value={user.username}/>
            <button>Update User</button>
            <button onClick={()=> props.setEditing(false)} className="button muted-button">Cancel</button>
        </form>
    )
}
export default EditUserForm