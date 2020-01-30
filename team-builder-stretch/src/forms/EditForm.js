import React,{useState,useEffect} from "react";

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
useEffect(() =>{
    setUser(props.currentUser)
},[props])
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input onChange={handleInputChange} type="text" name="name" id="name" value={user.name}/>
            <label htmlFor="role">Role</label>
            <input onChange={handleInputChange} type="text" name="role" id="role" value={user.role}/>
            <label htmlFor="email">E-mail</label>
            <input onChange={handleInputChange} type="email" name="email" id="email" value={user.email}/>
            <button>Update User</button>
            <button onClick={()=> props.setEditing(false)} className="button muted-button">Cancel</button>
        </form>
    )
}
export default EditUserForm