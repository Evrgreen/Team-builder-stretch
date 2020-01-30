import React, {useState} from "react";

const AddUserForm = props => {
    const initialFormState = {
        id:null,
        name:"",
        username:""
    }

    const [user,setUser] = useState(initialFormState);

    const handleInputChange = event =>{
        const {name,value} = event.target;

        setUser({...user,[name]:value})
    }
    const handleSubmit = event =>{
        event.preventDefault();
        if(!user.name||!user.username) return
        props.addUser(user);
        setUser(initialFormState)
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input onChange={handleInputChange} type="text" name="name" id="name" value={user.name}/>
            <label htmlFor="username">Username</label>
            <input onChange={handleInputChange} type="text" name="username" id="username" value={user.username}/>
            <button>Add New User</button>
        </form>
    )
}


export default AddUserForm