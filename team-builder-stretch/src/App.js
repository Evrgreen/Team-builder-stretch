import React, {useState} from 'react';

import UserTable from "./tables/UserTable"
import AddUserForm from "./forms/AddUserForm"
import EditUserForm from "./forms/EditForm"
import {userData} from "./DummyData";

const App = () =>{

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users,user])
  }
  const deleteUser = id =>{
    setUsers(users.filter(user=> user.id != id))
  }
  const [editing,setEditing] = useState(false)
  const initialFormState = {id:null,name:"",role:"",email:""}
  const [currentUser,setCurrentUser] = useState(initialFormState);
  const editRow = user =>{
    console.log(editing,"Is Editing")
    setEditing(true);
    setCurrentUser({id:user.id,name:user.name,role:user.role,email:user.email})
  }
  const updateUser = (id,updatedUser) =>{
    setEditing(false)

    setUsers(users.map(user=>(user.id===id?updatedUser:user)))
  }
  const [users,setUsers] = useState(userData)
  return(
    <div className="container">
      <h1>Team Builder</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm editing={editing} setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}/>
              </div>
          ):(
            <div>
          <h2>Add User</h2>
          <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View User</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
      </div>
    </div>
  )
}

export default App;
