import { useState } from 'react';

import NavBar from './components/navBar/NavBar';
import PostsPage from './pages/postsPage/PostsPage';
import UsersPage from './pages/usersPage/UsersPage';

import './App.css';
import UserProvider from './provider/UserProvider';
import PostProvider from './provider/PostProvider';

function App() {
  const [page, setPage] = useState({
    usersPage: true,
    postsPage: false,
  });

  const changePage = (page) => () => {
    let newState = {};
    setPage((state) => {
      for (const key in state) newState[key] = key === page ? true : false;
      return newState;
    });
  };

  return (
    <div className="App">
      <NavBar changePage={changePage} />
      <UserProvider>{page.usersPage && <UsersPage />}</UserProvider>
      <PostProvider>{page.postsPage && <PostsPage />}</PostProvider>
    </div>
  );
}

export default App;
