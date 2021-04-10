import { usePosts } from '../../provider/PostProvider';

import Post from '../../components/post/Post';

import './PostsPage.css';
import { useState } from 'react';

const PostsPage = () => {
  const { posts } = usePosts();
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleSeatch = () => (e) => {
    const input = e.target.value;
    setFilteredPosts(posts.filter((post) => post.title.includes(input) > 0));
  };

  return (
    <div className="posts">
      <div className="search_box">
        <input
          type="text"
          className="search"
          placeholder="search post"
          style={{ fontSize: 20 }}
          onChange={handleSeatch()}
        />
      </div>
      {!filteredPosts.length
        ? posts.map(({ id, title, body }) => (
            <Post title={title} key={id} content={body} />
          ))
        : filteredPosts.map(({ id, title, body }) => (
            <Post title={title} key={id} content={body} />
          ))}
    </div>
  );
};

export default PostsPage;
