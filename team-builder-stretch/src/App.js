import React, {useState} from 'react';
import UserTable from "./tables/UserTable"

const App = () =>{
  const userData = [
    {id:1, name:"Tania", username:"Floppydiskette"},
    {id:2, name:"Craig", username:"siliconeidolon"},
    {id:3, name:"Ben", username:"benisphere"},
  ]

  const [users,setUsers] = useState(userData)
  return(
    <div className="container">
      <h1>Crud app with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
        </div>
        <div className="flex-large">
          <h2>View User</h2>
          <UserTable/>
        </div>
      </div>
    </div>
  )
}

export default App;
