import { useEffect, useState } from "react";

interface User{
    id: number;
    name: string;
    email: string;
}
function UserList(){
    const [users,setUsers]= useState<User[]>([]);

    const fetchUsers = async() => {
        const respose = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await respose.json();
        setUsers(data);
    };
    useEffect (() =>{
        fetchUsers();
    });
    return (
            <ul className="list-group"> 
            {users.map((user)=>(
                <li className="list-group-item text-danger" key={user.id}>
                    {user.name} - {user.email}
                </li>
            ))}
        </ul>
            )
}
export default UserList;