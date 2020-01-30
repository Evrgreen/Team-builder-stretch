import React, {useState} from 'react';
import UserTable from "./tables/UserTable"
import AddUserForm from "./forms/AddUserForm"

const App = () =>{
  const userData = [
    {id:1, name:"Tania", username:"Floppydiskette"},
    {id:2, name:"Craig", username:"siliconeidolon"},
    {id:3, name:"Ben", username:"benisphere"},
  ]
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users,user])
  }
  const deleteUser = id =>{
    setUsers(users.filter(user=> user.id != id))
  }
  const [editing,setEditing] = useState(false)
  const initialFormState = {id:null,name:"",username:""}
  const [currentUser,setCurrentUser] = useState(initialFormState);
  const editRow = user =>{
    setEditing(true);
    setCurrentUser({id:user.id,name:user.name,username:user.username})
  }
  const [users,setUsers] = useState(userData)
  return(
    <div className="container">
      <h1>Crud app with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
          <AddUserForm addUser={addUser} />
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
