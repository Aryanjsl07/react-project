import React, { useState } from "react";
function Users(){
    const [Users,setUsers] = useState([
        { name: 'Mohan', age: 25},
        { name: 'Sohan', age:26}
    ])
    return(
        <div>
            <h2>Users</h2>
            <ul>
                {
                    Users.map((user, index) => {
                        return <li>{user.name}, {user.age}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default Users;