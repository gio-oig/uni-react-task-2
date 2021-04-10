import { useState } from 'react';
import { useUsers } from '../../provider/UserProvider';

import './usersPage.css';
const UsersPage = () => {
  const { users, setUsers } = useUsers();
  const [newUser, setNewUser] = useState();

  const handleInputChange = () => (e) => {
    const { value, name } = e.target;
    setNewUser((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const createUser = () => {
    setUsers((state) => [...state, { ...newUser, id: state.length + 1 }]);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th colSpan="2">Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="name"
                onChange={handleInputChange()}
                placeholder="Enter Name"
              />
            </td>
            <td>
              <input
                type="text"
                name="username"
                onChange={handleInputChange()}
                placeholder="Enter UserName"
              />
            </td>
            <td>
              <input
                type="text"
                name="email"
                onChange={handleInputChange()}
                placeholder="Enter Email"
              />
            </td>
            <td>
              <input
                type="text"
                name="phone"
                onChange={handleInputChange()}
                placeholder="Enter Phone"
              />
            </td>
            <td>
              <input
                type="text"
                name="website"
                onChange={handleInputChange()}
                placeholder="Enter Website"
              />
            </td>
            <td>
              <button onClick={createUser}>create</button>
            </td>
          </tr>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td colSpan="2">{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
