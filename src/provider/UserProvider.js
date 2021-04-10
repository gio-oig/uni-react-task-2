import { createContext, useContext, useEffect, useState } from 'react';

import userApi from '../service/user';

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await userApi.getUsers({ limit: 7 });
      setUsers(users);
    };
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return context;
};

export default UserProvider;
