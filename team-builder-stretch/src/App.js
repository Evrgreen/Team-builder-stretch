import React, {useState} from 'react';

import UserTable from "./tables/UserTable"
import AddUserForm from "./forms/AddUserForm"
import EditUserForm from "./forms/EditForm"
import {userData} from "./DummyData";

const App = () =>{
  //State declarations
  //State used to populate user table, default is set to value of userData in DummyData.js.
  const [users,setUsers] = useState(userData)
  //State for setting initial state of users for forms, creates a variable to hold an empty form then uses it as default state 
  const initialFormState = {id:null,name:"",role:"",email:""};
  const [currentUser,setCurrentUser] = useState(initialFormState);
  //State for tracking editting boolean value. when editing is true the EditUserForm  appears in place of AddUserForm
  const [editing,setEditing] = useState(false)


  //function for adding a new user to users state. creates a new id for user based on length of users +1 and then concats user object to users state
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users,user])
  }

  //function to delete user from users state. is passed an id then filters through user state and returns an array of all users without that ID and sets it to users state
  const deleteUser = id =>{
    setUsers(users.filter(user=> user.id != id))
  }

  //function to set the state of current user,used for editing users, assigned to click handler of edit button in UserTable.js
  //props: a user object associated with the edit button that was clicked
  //does: sets editing state to True(revealing EditUserForm), sets currentUser state to values of user object props
  //returns:nothing
  const editRow = user =>{
    setEditing(true);
    setCurrentUser({id:user.id,name:user.name,role:user.role,email:user.email})
  }
  //Function to updateUser list once editing on EditUserForm is complete
  //takes: an id value of the user to update, and the updatedUser object returned from the EditUserForm
  //does: sets editing state ot false, maps over all entries in user state if the users id matches the argument id that user is replaced with updatedUser
  //returns: a new mapped array to of all unedited users and the updatedUser then sets users state 
  const updateUser = (id,updatedUser) =>{
    setEditing(false)

    setUsers(users.map(user=>(user.id===id?updatedUser:user)))
  }

  return(
    <div className="container">
      <h1>Team Builder</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm 
                editing={editing} 
                setEditing={setEditing} 
                currentUser={currentUser} 
                updateUser={updateUser}
              />
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
