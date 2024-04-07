import React, { useState, useEffect } from "react";
function Users(){
    const [Users,setUsers] = useState([])
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data)
        })
    }, [])
    return(
        <div>
            <h2>Users</h2>
            <ul>
                {
                    Users.map((user, index) => {
                        return <li>{user.name}, {user.email}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default Users;