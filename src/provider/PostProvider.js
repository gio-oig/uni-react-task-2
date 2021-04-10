import { createContext, useContext, useEffect, useState } from 'react';

import postApi from '../service/post';

const PostContext = createContext(null);

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await postApi.getPosts({ limit: 7 });
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return context;
};

export default PostProvider;
