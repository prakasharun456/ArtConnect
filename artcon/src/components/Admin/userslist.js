import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {

  const [users, setUsers] = useState([]);


  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/admin/users'); 
      setUsers(response.data); 
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []); 

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
