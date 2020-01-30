import React, {useState} from "react";

const AddUserForm = props => {
    const initialFormState = {
        id:null,
        name:"",
        role:""
    }

    const [user,setUser] = useState(initialFormState);

    const handleInputChange = event =>{
        const {name,value} = event.target;

        setUser({...user,[name]:value})
    }
    const handleSubmit = event =>{
        event.preventDefault();
        if(!user.name||!user.role) return
        props.addUser(user);
        setUser(initialFormState)
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input onChange={handleInputChange} type="text" name="name" id="name" value={user.name}/>
            <label htmlFor="role">Role</label>
            <input onChange={handleInputChange} type="text" name="role" id="role" value={user.role}/>
            <label htmlFor="email">E-mail</label>
            <input onChange={handleInputChange} type="email" name="email" id="email" value={user.email}/>
            <button>Add New User</button>
        </form>
    )
}


export default AddUserForm